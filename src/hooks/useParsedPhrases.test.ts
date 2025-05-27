// MOCK
import { INITIAL_STATE } from "../mocks/mocks";

import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

// Hooks
import useParsedPhrases from "./useParsedPhrases";
import usePhrasesStore from "../store/store";

vi.mock("../store/store", () => {
  const phrases = INITIAL_STATE;
  const deletePhrase = vi.fn();

  return {
    __esModule: true,
    default: vi.fn(() => ({
      phrases,
      deletePhrase,
    })),
  };
});

describe("useParsedPhrases hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns parsed phrases with index and phrase", () => {
    const { result } = renderHook(() => useParsedPhrases());

    expect(result.current.phrases).toEqual([
      { index: 0, phrase: INITIAL_STATE[0] },
      {
        index: 1,
        phrase: INITIAL_STATE[1],
      },
      { index: 2, phrase: INITIAL_STATE[2] },
    ]);
    expect(typeof result.current.deletePhrase).toBe("function");
  });

  it("calls deletePhrase when invoked", () => {
    const { result } = renderHook(() => useParsedPhrases());

    act(() => {
      result.current.deletePhrase(0);
    });

    expect(usePhrasesStore().deletePhrase).toHaveBeenCalledWith(0);
  });
});
