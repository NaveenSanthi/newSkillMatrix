import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./ModalToggle";
import FormReducers from "./FormReducers";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    form: FormReducers,
  },
});
export default store;
