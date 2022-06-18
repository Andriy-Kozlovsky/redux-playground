import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = {showCounter: true, counter: 0};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremet(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action: any) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
