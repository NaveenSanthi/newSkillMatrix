import { Form, Select, Radio } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormReducerAction } from "../store/FormReducers";
import classes from "./Form.module.css";
const Forms = () => {
  const initialState = {
    skill: "",
    radioValue: "",
  };
  const AComponentOption = useSelector((state) => state.form.Acategory);
  const ADummyValue = useSelector((state) => state.form.ADummyValue);
  const BComponentOpion = useSelector((state) => state.form.Bcategory);
  const BDummyValue = useSelector((state) => state.form.BDummyValue);
  const CComponentOpion = useSelector((state) => state.form.Ccategory);
  const CDummyValue = useSelector((state) => state.form.CDummyValue);
  const radioValue = useSelector((state) => state.form.radioValue);
  const dispatch = useDispatch();
  const [modalValue, setModalValue] = useState(initialState);
  const [form] = Form.useForm();

  const ASelectHandler = (value) => {
    console.log(value);
    dispatch(FormReducerAction.BSelectDummyValue([]));
    dispatch(FormReducerAction.CSelectDummyValue([]));
  };

  const BChangeHandler = (value) => {
    dispatch(FormReducerAction.BSelectDummyValue(value));
    dispatch(FormReducerAction.CSelectDummyValue([]));
    dispatch(FormReducerAction.BChangeHandler(value));
  };
  const radioButtonChange = (event) => {
    const value = event.target.value;
    const id = event.target.in;
    dispatch(FormReducerAction.radioValueChange({ value, id }));
  };
  const AChangeHandler = (value) => {
    dispatch(FormReducerAction.ASelectDummyValue(value));
    dispatch(FormReducerAction.ASelectHandler(value));
  };
  const CChangeHandler = (value, obj) => {
    const ids = obj.id;
    dispatch(FormReducerAction.CSelectDummyValue({ value, ids }));
    setModalValue((pre) => {
      return { ...modalValue, skill: value };
    });
  };
  return (
    <Form labelCol={{ span: 7 }} wrapperCol={{ span: 14 }} form={form}>
      <Form.Item label="Skill category">
        <Select
          onSelect={ASelectHandler}
          onChange={AChangeHandler}
          value={ADummyValue}
        >
          {AComponentOption.map((data) => {
            return (
              <Select.Option key={data.id} id={data.id} value={data.skill}>
                {data.skill}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item label="Sub-skill category">
        <Select
          value={BDummyValue}
          onChange={BChangeHandler}
          notFoundContent={<span>Please Select Skill category</span>}
        >
          {BComponentOpion.map((data) => {
            return (
              <Select.Option key={data.id} value={data.skill}>
                {data.skill}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item label="Sub-skill category">
        <Select
          value={CDummyValue}
          onChange={CChangeHandler}
          notFoundContent={<span>Please Select sub-Skill category</span>}
        >
          {CComponentOpion.map((data) => {
            return (
              <Select.Option key={data.id} value={data.skill} id={data.id}>
                {data.skill}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item>
        <Radio.Group onChange={radioButtonChange} value={radioValue}>
          <div className={classes.radioBtn}>
            <Radio value="Having knowledge" in="1">
              Having knowledge
            </Radio>
            <Radio value="Interested to learn" in="2">
              Interested to learn
            </Radio>
          </div>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
export default Forms;
