import { useRef, useState } from "react";
import { flushSync } from 'react-dom';

/**
 * Simplified version of DataProvider state
 * 
 * @param initVal initial state
 * @returns getData and setData functions
 */
export interface DataProvider {
  selected: number;
}

export const useDataProvider = (initVal: DataProvider) => {
  const stateRef = useRef(initVal);
  const [state, setState] = useState(initVal);

  // wrong impl to mimic react state update side effect
  stateRef.current = state;

  return {
    getData: () => stateRef.current,
    setData: setState,
    data: stateRef.current,
  };
};

export const useDataProviderV2 = (initVal: DataProvider) => {
  const stateRef = useRef(initVal);
  const [_, setState] = useState(initVal);

  return {
    getData: () => stateRef.current,
    setData: (newState: DataProvider) => {
      stateRef.current = newState;
      setState(newState);
    },
    data: stateRef.current,
  };
};

export const useDataProviderV3 = (initVal: DataProvider, concurrentMode: boolean = false) => {
  const stateRef = useRef(initVal);
  const [state, setState] = useState(initVal);

  // wrong impl to mimic react state update side effect
  stateRef.current = state;

  return {
    getData: () => stateRef.current,
    // setData: v => concurrentMode ? setState(v) : flushSync(() => setState(v))
    data: stateRef.current,
    setData: concurrentMode ? setState : (v: DataProvider) => flushSync(() => setState(v)),
  };
};