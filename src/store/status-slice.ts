import {createSlice} from "@reduxjs/toolkit";

export const statusSlice = createSlice({
  name: "status",
  initialState: {fetch: "", send: ""},
  reducers: {
    setFetch: (state, action) => {
      state.fetch = action.payload;
    },
    setSend: (state, action) => {
      state.send = action.payload;
    },
  },
});

export const {setFetch, setSend} = statusSlice.actions;
