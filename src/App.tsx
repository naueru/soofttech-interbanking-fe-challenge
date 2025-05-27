// Router
import { Route, Routes } from "react-router";

// Components
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/header";
import Dashboard from "./pages/dashboard/Dashboard";

// Styles
import styles from "./app.module.css";

const Main = () => {
  return (
    <main className={styles.mainSection}>
      <Dashboard />
    </main>
  );
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
