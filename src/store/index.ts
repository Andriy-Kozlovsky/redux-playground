import {createStore} from "redux";

const initialState: string[] = [];

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD":
      const repeated = state.filter((item) => item === action.value);

      if (action.value === "" || repeated.length > 0) return state;

      return [...state, action.value];
    case "REMOVE":
      return state.filter((_, index) => index !== action.index);
    case "CLEAR_LIST":
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
