// Types
import type { FC, PropsWithChildren } from "react";

// Styles
import styles from "./link.module.css";

export type TLink = {
  to: string;
  self?: boolean;
  className?: string;
} & PropsWithChildren;

const Link: FC<TLink> = ({ children, to, self, className = "", ...rest }) => {
  return (
    <a
      className={`${styles.container} ${className}`}
      href={to}
      target={self ? "_self" : "_blank"}
      rel={self ? "" : "noopener noreferrer"}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
