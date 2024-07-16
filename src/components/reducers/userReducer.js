// userReducer.js

const initialState = {
  user: null,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: { ...action.payload } };
    case "LOGOUT":
      localStorage.clear();
      return initialState;
    default:
      return state;
  }
};
