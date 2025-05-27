import { useRef, useState, useCallback } from "react";

type TState = string | undefined;

type TCallback = (value: TState) => void;

const useDebouncedState = (
  initialState?: string,
  delay: number = 500
): [TState, TCallback] => {
  const [state, setState] = useState<TState>(initialState);
  const timeoutRef = useRef<number | null>(null);

  const handleChange = useCallback(
    (value: TState) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setState(value);
      }, delay);
    },
    [delay]
  );

  return [state, handleChange];
};

export default useDebouncedState;
