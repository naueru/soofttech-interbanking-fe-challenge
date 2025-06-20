// Types
import { type FC } from "react";

// Components
import Logo from "../logo/logo";

// Theme
import { COLORS } from "../../../constants/colors";

// Styles
import styles from "./branding.module.css";

export type TBrandingProps = {
  alt?: boolean;
  inverted?: boolean;
  small?: boolean;
  label?: boolean;
};

const Branding: FC<TBrandingProps> = ({ inverted, small, label, alt }) => {
  return (
    <span className={styles.container}>
      <Logo
        className={styles.logo}
        sizeFactor={small ? 0.6 : 1}
        color={alt ? COLORS.LOGO_ALT : COLORS.LOGO}
      />
      {label ? (
        <p className={`${styles.legend} ${inverted ? styles.inverted : ""}`}>
          Tech
        </p>
      ) : null}
    </span>
  );
};

export default Branding;
