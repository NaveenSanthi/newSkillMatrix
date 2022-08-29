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
  modalArray: [],
  modalValue: {
    key: "",
    id: "",
    skill: "",
    havingKnowledge: "",
    interestToLearn: "",
  },
};
const FormReducers = createSlice({
  name: "Form",
  initialState: initialState,
  reducers: {
    radioValueChange(state, action) {
      state.radioValue = action.payload.value;
      console.log(action.payload);
      if (action.payload.id === "1") {
        state.modalValue = {
          ...state.modalValue,
          havingKnowledge: action.payload.value,
          interestToLearn: "-",
        };
      } else {
        state.modalValue = {
          ...state.modalValue,
          havingKnowledge: "-",
          interestToLearn: action.payload.value,
        };
      }
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
        key: action.payload.ids,
        skill: action.payload.value,
        id: action.payload.ids,
      };
    },

    addValueToArray(state) {
      const ss = state.modalArray.push(state.modalValue);
    },
    clearAllValue(state) {
      state.ADummyValue = [];
      state.CDummyValue = [];
      state.BDummyValue = [];
      state.CDummyValue = [];
      state.Bcategory = [];
      state.Ccategory = [];
      state.radioValue = "";
      state.modalValue.id = "";
      state.modalValue.skill = "";
      state.modalValue.havingKnowledge = "";
      state.modalValue.interestToLearn = "";
    },
  },
});
export const FormReducerAction = FormReducers.actions;
export default FormReducers.reducer;
