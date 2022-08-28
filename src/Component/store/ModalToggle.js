import { createSlice } from "@reduxjs/toolkit";
const initialModalState = { isModalVisible: false };
const modalSlice = createSlice({
  name: "ModalToggle",
  initialState: initialModalState,
  reducers: {
    openModal(state) {
      state.isModalVisible = true;
    },
    closeModal(state) {
      state.isModalVisible = false;
    },
  },
});
export const toggleAction = modalSlice.actions;
export default modalSlice.reducer;
