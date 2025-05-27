import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./utils/hidden.ts";

// Components
import App from "./App.tsx";

// Styles
import "./index.css";
import "./styles/colors.css";
import "./styles/constants.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
