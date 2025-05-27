// Components
import { Link as RouterLink } from "react-router";

// Types
import type { FC } from "react";
import type { LinkProps } from "react-router";

// Styles
import styles from "./link.module.css";

export type TLinkProps = {
  self?: boolean;
} & LinkProps;

const Link: FC<TLinkProps> = ({ children, self, ...rest }) => {
  return (
    <RouterLink
      className={`${styles.container}`}
      target={self ? "_self" : "_blank"}
      rel={self ? "" : "noopener noreferrer"}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
