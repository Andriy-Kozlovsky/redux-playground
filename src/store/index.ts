import {configureStore} from "@reduxjs/toolkit";

import formValuesReducer from "./form";
import listReducer from "./list";

const store = configureStore({
  reducer: {form: formValuesReducer, list: listReducer},
});

export default store;
