// Hooks
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import useParsedPhrases from "../../../../hooks/useParsedPhrases";

// Components
import ConfirmationDialog from "../../../ui/confirmationDialog/ConfirmationDialog";
import Card from "./card/Card";

// Styles
import styles from "./cardsGrid.module.css";
import Headline from "../../../ui/headline/Headline";

const CardsGrid = () => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  const { phrases, deletePhrase } = useParsedPhrases();

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

  const filteredPhrases = useMemo(() => {
    return searchQuery
      ? phrases.filter((item) =>
          item.phrase.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : phrases;
  }, [searchQuery, phrases]);

  return (
    <>
      {filteredPhrases.length ? (
        <ul className={styles.container}>
          {filteredPhrases.map((item) => (
            <li key={`grid_cell_${item.index}`}>
              <Card
                phrase={item.phrase}
                onDelete={() => handleDelete(item.index)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyContainer}>
          <Headline>
            There are no phrases yet, hit the plus button and start typing!
          </Headline>
        </div>
      )}
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
