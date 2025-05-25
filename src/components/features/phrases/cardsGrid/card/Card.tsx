// Types
import type { FC } from "react";

// Styles
import styles from "./card.module.css";

export type TCardProps = {
  phrase: string;
  onDelete: () => void;
};

const Card: FC<TCardProps> = ({ phrase, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <div className={styles.postit}>
      {phrase}
      <button className={styles.remove} onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default Card;
