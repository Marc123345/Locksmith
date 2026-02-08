import { useState, useCallback } from 'react';

export function useSafeState<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  
  const setSafeState = useCallback((value: T | ((prev: T) => T)) => {
    try {
      setState(value);
    } catch {
      // silently handle state update errors
    }
  }, []);

  return [state, setSafeState] as const;
}