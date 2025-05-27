import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

// Hook
import useDebouncedState from "./useDebouncedState";

describe("useDebouncedState", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("initializes with the given initial state", () => {
    const { result } = renderHook(() => useDebouncedState("initial", 500));
    const [state] = result.current;

    expect(state).toBe("initial");
  });

  it("updates state after the debounce delay", () => {
    const { result } = renderHook(() => useDebouncedState(undefined, 500));
    const [, handleChange] = result.current;

    act(() => {
      handleChange("new value");
    });

    // State should not update immediately
    expect(result.current[0]).toBeUndefined();

    // Fast-forward time by 500ms
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current[0]).toBe("new value");
  });

  it("cancels previous timeout if handleChange is called again before delay", () => {
    const { result } = renderHook(() => useDebouncedState(undefined, 500));
    const [, handleChange] = result.current;

    act(() => {
      handleChange("first");
      // Call again before 500ms passes
      handleChange("second");
    });

    // Advance time by less than delay, state should not update yet
    act(() => {
      vi.advanceTimersByTime(400);
    });
    expect(result.current[0]).toBeUndefined();

    // Advance remaining time
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current[0]).toBe("second");
  });

  it("works with custom delay", () => {
    const { result } = renderHook(() => useDebouncedState(undefined, 1000));
    const [, handleChange] = result.current;

    act(() => {
      handleChange("delayed");
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current[0]).toBeUndefined();

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current[0]).toBe("delayed");
  });
});
