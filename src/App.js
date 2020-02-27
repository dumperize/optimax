import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./reducers";
import Cart from "./components/cart";

import "./App.css";
import { watchLoadItems } from "./saga";

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
  sagaMiddleware.run(watchLoadItems);
  //TODO: rewrite

  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;
