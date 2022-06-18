import {createStore} from "redux";

const initialState = {counter: 0, showCounter: false};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return {counter: state.counter + 1, showCounter: state.showCounter};
    case "DECREMENT":
      return {counter: state.counter - 1, showCounter: state.showCounter};
    case "INCREASE":
      return {counter: state.counter + action.amount, showCounter: state.showCounter};
    case "DECREASE":
      return {counter: state.counter - action.amount, showCounter: state.showCounter};
    case "TOGGLE":
      return {showCounter: !state.showCounter, counter: state.counter};
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
