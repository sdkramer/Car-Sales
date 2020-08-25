import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import reducers from "./Reducers";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(reducers, applyMiddleware(logger));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
