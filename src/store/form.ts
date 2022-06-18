import {createSlice} from "@reduxjs/toolkit";

const initialFormState = {
  name: "",
  price: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changePrice(state, action) {
      state.price = action.payload;
    },
    reset(state) {
      state.name = "";
      state.price = 0;
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice.reducer;
