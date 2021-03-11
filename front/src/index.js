import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

const App = () => {
  return (
    <>
      <Header />
      <List />
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
);
