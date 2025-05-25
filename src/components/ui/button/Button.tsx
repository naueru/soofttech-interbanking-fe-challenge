// Types
import type { ButtonHTMLAttributes, FC } from "react";

// Styles
import styles from "./button.module.css";

export type TButtonProps = {
  secondary?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<TButtonProps> = ({ secondary = false, ...rest }) => {
  return (
    <button
      className={`${styles.container} ${
        secondary ? styles.secondary : styles.primary
      }`}
      {...rest}
    />
  );
};

export default Button;
