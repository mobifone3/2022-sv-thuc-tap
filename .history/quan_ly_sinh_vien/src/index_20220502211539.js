import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./redux/store";
import { Provider } from "react-redux";
/** import component */
import App from "./App";
// import { MyContext } from "./context/myContext";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const container = document.getElementById("root");
const roots = createRoot(container);
roots.render(
  // <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  // </Provider>
);
