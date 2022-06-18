import {createSlice, configureStore} from "@reduxjs/toolkit";

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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
