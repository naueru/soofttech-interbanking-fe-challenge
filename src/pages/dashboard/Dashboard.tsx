// Components
import AddPhrase from "../../components/features/phrases/addPhrase/AddPhrase";
import CardsGrid from "../../components/features/phrases/cardsGrid/CardsGrid";

// Styles
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <section className={styles.container}>
      <CardsGrid />

      <AddPhrase />
    </section>
  );
};

export default Dashboard;
