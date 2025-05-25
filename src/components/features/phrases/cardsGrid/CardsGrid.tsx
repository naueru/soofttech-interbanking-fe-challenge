// Hooks
import { useState } from "react";

// Store
import usePhrasesStore from "../../../../store/store";

// Components
import ConfirmationDialog from "../../../ui/confirmationDialog/ConfirmationDialog";
import Card from "./card/Card";

// Styles
import styles from "./cardsGrid.module.css";
import { useShallow } from "zustand/shallow";

const CardsGrid = () => {
  const { phrases, deletePhrase } = usePhrasesStore(
    useShallow((state) => ({
      phrases: state.phrases,
      deletePhrase: state.deletePhrase,
    }))
  );
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<number | null>(null);

  const handleCancel = () => {
    setCardToDelete(null);
    setIsConfirmationOpen(false);
  };

  const handleConfirm = () => {
    if (cardToDelete !== null) {
      deletePhrase(cardToDelete);
      setCardToDelete(null);
      setIsConfirmationOpen(false);
    }
  };

  const handleDelete = (index: number) => {
    setCardToDelete(index);
    setIsConfirmationOpen(true);
  };

  return (
    <>
      <ul className={styles.container}>
        {phrases.map((phrase, index) => (
          <li key={`grid_cell_${index}`}>
            <Card phrase={phrase} onDelete={() => handleDelete(index)} />
          </li>
        ))}
      </ul>
      <ConfirmationDialog
        isOpen={isConfirmationOpen}
        onCancel={handleCancel}
        title="Are you sure?"
        message="You're about to delete that phrase. This actions is irreversible."
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default CardsGrid;
