import { createSlice } from "@reduxjs/toolkit";
import category from "../data/category";
import {
  technicalSkill,
  management,
  webDesign,
  Backend,
} from "../data/subCategory";
const initialState = {
  Acategory: category,
  ADummyValue: [],
  Bcategory: [],
  BDummyValue: [],
  Ccategory: [],
  CDummyValue: [],
  radioValue: "",
  modalValue: {
    id: "",
    skill: "",
    radioValue: "",
  },
};
const FormReducers = createSlice({
  name: "Form",
  initialState: initialState,
  reducers: {
    radioValueChange(state, action) {
      state.radioValue = action.payload;
      state.modalValue = { ...state.modalValue, radioValue: action.payload };
    },
    AcategoryChangeHandler(state, action) {
      state.Acategory = action.payload;
    },
    ASelectDummyValue(state, action) {
      state.ADummyValue = action.payload;
    },
    ASelectHandler(state, action) {
      let value = action.payload;
      state.Bcategory = [];
      state.Ccategory = [];
      if (value === "Technical") {
        state.Bcategory = technicalSkill;
      }
      if (value === "Management") {
        state.Bcategory = management;
      }
    },
    BChangeHandler(state, action) {
      let value = action.payload;
      if (value === "WebDesign") {
        state.Ccategory = webDesign;
      }
      if (value === "Backend") {
        state.Ccategory = Backend;
      }
    },
    BSelectDummyValue(state, action) {
      state.BDummyValue = action.payload;
    },
    CSelectDummyValue(state, action) {
      state.CDummyValue = action.payload.value;
      state.modalValue = {
        ...state.modalValue,
        skill: action.payload,
        id: action.payload.ids,
      };
    },
  },
});
export const FormReducerAction = FormReducers.actions;
export default FormReducers.reducer;
