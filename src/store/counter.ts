import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {showCounter: true, counter: 0};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    incremet(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action: any) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
