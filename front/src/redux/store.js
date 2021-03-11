import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { asyncTestWord } from "./middlewares.js";

export default createStore(rootReducer, applyMiddleware(asyncTestWord));
