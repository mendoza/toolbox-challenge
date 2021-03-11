import { ADD_WORD } from "../actionTypes";

const initialState = {
  words: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_WORD: {
      const { word } = action.payload;
      return {
        ...state,
        words: [word, ...state.words],
      };
    }
    default:
      return state;
  }
}
