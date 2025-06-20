// Components
import Search from "../../features/phrases/search/Search";
import Branding from "../../ui/branding/Branding";
import Link from "../../ui/link/Link";

// Styles
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationListItem}>
            <Link reloadDocument to="/" self>
              <Branding label />
            </Link>
          </li>
          <li className={styles.navigationListItem}>
            <Search />
          </li>
          <li className={styles.navigationListItem}>
            <Link to="https://github.com/naueru/soofttech-interbanking-fe-challenge">
              <div className={styles.icon} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
