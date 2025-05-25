// Components
import Branding from "../../ui/branding/Branding";
import Link from "../../ui/link/Link";

// Styles
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <p className={styles.description}>
          This is an assignment for
          <Link to="https://sooft.tech/" className={styles.linkText}>
            Sooft Technology
            <Branding small alt />
          </Link>
        </p>
      </nav>
    </header>
  );
};

export default Footer;
