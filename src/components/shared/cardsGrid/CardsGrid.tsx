// Styles
import type { FC } from "react";
import styles from "./cardsGrid.module.css";
import Card from "./card/Card";

export type TCardsGrid = {
  phrases: string[];
  onDelete: (index: number) => void;
};

const CardsGrid: FC<TCardsGrid> = ({ phrases, onDelete }) => {
  return (
    <ul className={styles.container}>
      {phrases.map((phrase, index) => (
        <li key={`grid_cell_${index}`}>
          <Card phrase={phrase} onDelete={() => onDelete(index)} />
        </li>
      ))}
    </ul>
  );
};

export default CardsGrid;
