// Core
import { createPortal } from "react-dom";

// Types
import type { FC, PropsWithChildren } from "react";

// Components
import Button from "../button/Button";

// Styles
import styles from "./modal.module.css";

export type TModalProps = {
  isOpen?: boolean;
  handleClose?: () => void;
} & PropsWithChildren;

const Modal: FC<TModalProps> = ({ isOpen, handleClose, children }) => {
  const portal = document.getElementById("modal-portal");
  if (!isOpen || !portal) return null;

  return createPortal(
    <div data-testid="modal" className={styles.container} onClick={handleClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <Button secondary onClick={handleClose} className={styles.close}>
          X
        </Button>
        {children}
      </div>
    </div>,
    portal
  );
};

export default Modal;
