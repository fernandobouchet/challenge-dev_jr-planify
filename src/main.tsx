import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
import { ServicesProvider } from "@hooks/useUserServices";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ServicesProvider>
      <RouterProvider router={router} />
    </ServicesProvider>
  </React.StrictMode>
);
