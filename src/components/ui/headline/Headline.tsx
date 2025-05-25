// Types
import type { FC, HTMLAttributes } from "react";

// Styles
import styles from "./headline.module.css";

const Headline: FC<HTMLAttributes<HTMLHeadingElement>> = (props) => {
  return <h3 className={styles.container} {...props} />;
};

export default Headline;
