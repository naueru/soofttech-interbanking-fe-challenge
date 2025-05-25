// Types
import type { FC } from "react";

// Components
import Modal from "../modal/Modal";
import Button from "../button/Button";
import Headline from "../headline/Headline";

// Styles
import styles from "./confirmationDialog.module.css";

export type TConfirmationDialogProps = {
  isOpen: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationDialog: FC<TConfirmationDialogProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal isOpen={isOpen} handleClose={onCancel}>
      <div>
        <Headline>{title}</Headline>
        <p className={styles.description}>{message}</p>
        <section className={styles.actions}>
          <Button onClick={onConfirm}>Ok</Button>
          <Button secondary onClick={onCancel}>
            Cancel
          </Button>
        </section>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
