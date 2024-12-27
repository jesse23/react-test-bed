import { useRef, useState } from "react";
import { DataProvider } from "../DataProvider";

/**
 * Simplified version of DataProvider state
 * 
 * @param initVal initial state
 * @returns getData and setData functions
 */
export const useDataProvider = (initVal: DataProvider) => {
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