import { useState, useEffect } from 'react';

type Atom<T> = {
  init?: T;
  read: (get: (a: Atom<any>) => any) => T;
  write?: (get: (a: Atom<any>) => any, set: (a: Atom<any>, v: any) => void, value: any) => void;
};

type AtomState<T> = {
  value: T;
  listeners: Set<() => void>;
  dependents: Set<Atom<any>>;
};

const atomStateMap = new WeakMap<Atom<any>, AtomState<any>>();

export const atom = <T>(read: ((get: (a: Atom<any>) => any) => T) | T, write?: (get: (a: Atom<any>) => any, set: (a: Atom<any>, v: any) => void, value: any) => void): Atom<T> => {
  if (typeof read === 'function') {
    return { read: read as (get: (a: Atom<any>) => any) => T, write };
  }
  const config: Atom<T> = {
    init: read as T,
    read: (get) => get(config),
    write: write || ((get, set, arg) => {
      if (typeof arg === 'function') {
        set(config, arg(get(config)));
      } else {
        set(config, arg);
      }
    }),
  };
  return config;
};

const getAtomState = <T>(atom: Atom<T>): AtomState<T> => {
  let atomState = atomStateMap.get(atom);
  if (!atomState) {
    atomState = {
      value: (atom as any).init,
      listeners: new Set(),
      dependents: new Set(),
    };
    atomStateMap.set(atom, atomState);
  }
  return atomState;
};

const readAtom = <T>(atom: Atom<T>): T => {
  const atomState = getAtomState(atom);
  const get = (a: Atom<any>) => {
    if (a === atom) {
      return atomState.value;
    }
    const aState = getAtomState(a);
    aState.dependents.add(atom);
    return readAtom(a);
  };
  const value = atom.read(get);
  atomState.value = value;
  return value;
};

const notify = (atom: Atom<any>): void => {
  const atomState = getAtomState(atom);
  atomState.dependents.forEach((d) => {
    if (d !== atom) notify(d);
  });
  atomState.listeners.forEach((l) => l());
};

const writeAtom = <T>(atom: Atom<T>, value: any): void => {
  const atomState = getAtomState(atom);

  const get = (a: Atom<any>) => {
    const aState = getAtomState(a);
    return aState.value;
  };

  const set = (a: Atom<any>, v: any) => {
    if (a === atom) {
      atomState.value = v;
      notify(atom);
      return;
    }
    writeAtom(a, v);
  };

  atom.write?.(get, set, value);
};

export const useAtom = <T>(atom: Atom<T>): [T | undefined, (nextValue: any) => void] => {
  const [value, setValue] = useState<T | undefined>();
  useEffect(() => {
    const callback = () => setValue(readAtom(atom));
    const atomState = getAtomState(atom);
    atomState.listeners.add(callback);
    callback();
    return () => {
      atomState.listeners.delete(callback)
    };
  }, [atom]);
  const setAtom = (nextValue: any) => {
    writeAtom(atom, nextValue);
  };
  return [value, setAtom];
};