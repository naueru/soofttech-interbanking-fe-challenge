import { useShallow } from "zustand/shallow";
import usePhrasesStore from "../store/store";

const useParsedPhrases = () => {
  const { phrases, deletePhrase } = usePhrasesStore(
    useShallow((state) => ({
      phrases: state.phrases,
      deletePhrase: state.deletePhrase,
    }))
  );
  const parsedPhrases = phrases.map((phrase, index) => ({ index, phrase }));
  return { phrases: parsedPhrases, deletePhrase };
};

export default useParsedPhrases;
