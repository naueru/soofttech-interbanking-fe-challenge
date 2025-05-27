// Types
import type { FC } from "react";

// Components
import Headline from "../../components/ui/headline/Headline";
import Link from "../../components/ui/link/Link";

// Styles
import styles from "./notFound.module.css";

const NotFound: FC = () => {
  return (
    <section className={styles.container}>
      <Headline>You didn't find the page you're looking for</Headline>
      <p className={styles.description}>
        But maybe you found your next developer{" "}
        <Link to="https://github.com/naueru/" className={styles.link}>
          here
        </Link>
        .
      </p>
      <Link to="/" className={styles.link}>
        Go back home
      </Link>
    </section>
  );
};

export default NotFound;
