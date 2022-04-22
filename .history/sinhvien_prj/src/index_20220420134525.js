import React, { createRoot, StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");
const roots = createRoot(container);
roots.render(
  <StrictMode>
    <App />
  </StrictMode>
);
