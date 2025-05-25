// Components
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/header";
import Dashboard from "./pages/dashboard/Dashboard";

// Styles
import styles from "./app.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainSection}>
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}

export default App;
