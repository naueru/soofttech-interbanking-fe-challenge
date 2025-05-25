// Components
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/header";

// Styles
import styles from "./app.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainSection}>App component</main>
      <Footer />
    </>
  );
}

export default App;
