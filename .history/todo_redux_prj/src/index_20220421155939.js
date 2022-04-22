/** import lib */
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react";

/** import component */
import App from "./App";
import reducers from "./redux/todoStore";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const container = document.getElementById("root");
const roots = createRoot(container);

roots.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
