// Hooks
import { useState } from "react";

// Components
import Button from "../../../ui/button/Button";
import AddPhraseModal from "../addPhraseModal/AddPhraseModal";

// Styles
import styles from "./addPhrase.module.css";

const AddPhrase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className={styles.add}>
        +
      </Button>
      <AddPhraseModal isOpen={isModalOpen} handleClose={handleClose} />
    </>
  );
};

export default AddPhrase;
