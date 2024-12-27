import { useRef, useState } from "react";

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
    }
  };
};