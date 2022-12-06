// src/redux/modules/counter.js

// Action Value
const ADD_NUMBER = "ADD_NUMBER";
// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};
// Initial State
const initialState = {
  number: 0,
};
// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// export default reducer
export default counter;
