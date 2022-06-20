import {configureStore, createSlice} from "@reduxjs/toolkit";

interface Item {
  id: number;
  name: string;
}

const listSlice = createSlice({
  name: "list",
  initialState: {items: [] as Item[], editId: -1, inputValue: ""},
  reducers: {
    addItem: (state, action) => {
      if (action.payload.name === "") return;
      if (state.items.find((item) => item.name === action.payload.name)) return;
      if (state.editId === -1) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.map((item) => {
          if (item.id === state.editId) {
            return {name: state.inputValue, id: item.id};
          }

          return item;
        });
      }
      state.editId = -1;
      state.inputValue = "";
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
      state.inputValue = "";
      state.editId = -1;
    },
    editItem: (state, action) => {
      state.editId = state.items[action.payload].id;
      state.inputValue = state.items[action.payload].name;
    },
    updateInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

const store = configureStore({reducer: listSlice.reducer});

export const {addItem, removeItem, editItem, updateInputValue} = listSlice.actions;

export default store;
