// Router
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

// Layout Components
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/header";

// Pages
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/notFound/NotFound";

// Styles
import styles from "./app.module.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.mainSection}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <NotFound />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
