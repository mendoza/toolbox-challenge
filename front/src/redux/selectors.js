export const getWordsState = (store) => store.words;

export const getWordsList = (store) =>
  getWordsState(store) ? getWordsState(store).words : [];
