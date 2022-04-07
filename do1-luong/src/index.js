import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");
const roots = createRoot(container);
roots.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
