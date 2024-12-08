import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Card } from "./App";
import "./index.css";

// root container
const rootContainer = document.getElementById("root");

// render the App component into the root container

createRoot(rootContainer).render(
  <StrictMode>
    <Card />
  </StrictMode>
);
