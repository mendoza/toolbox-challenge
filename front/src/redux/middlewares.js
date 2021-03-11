import { ADD_WORD, TEST_WORD } from "./actionTypes";
import axios from "axios";

const asyncTestWord = (storeAPI) => (next) => (action) => {
  if (action.type === TEST_WORD) {
    const { word } = action.payload;
    axios
      .get(`http://localhost:3001/iecho?text=${word}`)
      .then((resp) => {
        storeAPI.dispatch({ type: ADD_WORD, payload: { word: resp.data } });
      })
      .catch(() => {
      });
  }
  return next(action);
};

export { asyncTestWord };
