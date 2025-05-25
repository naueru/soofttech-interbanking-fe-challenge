// Components
import CardsGrid from "../../components/shared/cardsGrid/CardsGrid";
import useStore from "../../store/store";

// Styles
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const { phrases, addPhrase, deletePhrase } = useStore();
  return (
    <section className={styles.container}>
      <CardsGrid phrases={phrases} onDelete={deletePhrase} />
      <button onClick={() => addPhrase("Test")} className={styles.add}>
        +
      </button>
    </section>
  );
};

export default Dashboard;
