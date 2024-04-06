import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ServicesProvider } from "@hooks/useUserServices";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ServicesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ServicesProvider>
  </React.StrictMode>
);
