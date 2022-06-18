import {createSlice} from "@reduxjs/toolkit";

import {ListItem} from "../models";

const listInitialState: ListItem[] = [];

const listSlice = createSlice({
  name: "list",
  initialState: listInitialState,
  reducers: {
    addItem(state, action) {
      if (action.payload.name !== "") state.push(action.payload);
    },
    removeItem(state, action) {
      state.splice(action.payload, 1);
    },
    clearList(state) {
      state.length = 0;
    },
  },
});

export const listActions = listSlice.actions;
export default listSlice.reducer;
