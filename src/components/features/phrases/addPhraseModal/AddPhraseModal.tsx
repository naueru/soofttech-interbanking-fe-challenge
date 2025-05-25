// Types
import type { FC, FormEvent } from "react";

// Store
import usePhrasesStore from "../../../../store/store";

// Components
import Button from "../../../ui/button/Button";
import Modal from "../../../ui/modal/Modal";

// Styles
import styles from "./addPhraseModal.module.css";
import Headline from "../../../ui/headline/Headline";

export type TAddPhraseModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const AddPhraseModal: FC<TAddPhraseModalProps> = ({
  isOpen = false,
  handleClose,
}) => {
  const addPhrase = usePhrasesStore((state) => state.addPhrase);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = ((formData.get("phrase") as string) || "").trim();
    if (value) {
      addPhrase(value);
      handleClose();
    }
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <form onSubmit={handleSubmit} className={styles.container}>
        <Headline>New Phrase</Headline>
        <label htmlFor="name">Phrase</label>
        <textarea
          name="phrase"
          placeholder="Add a new phrase..."
          className={styles.input}
          autoFocus
        ></textarea>
        <div className={styles.actions}>
          <Button>Confirm</Button>
          <Button secondary>Cancel</Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddPhraseModal;
