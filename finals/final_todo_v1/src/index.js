/** import lib */
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/** import component */
import App from "./App";
import { MyContext } from "./context/myContext";

const container = document.getElementById("root");
const roots = createRoot(container);
roots.render(
  <StrictMode>
    <App />
  </StrictMode>
);
