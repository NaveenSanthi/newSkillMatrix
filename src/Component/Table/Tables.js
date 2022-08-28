import React from "react";
import { Table } from "antd";
// import Column from "../data/Column";
import { useSelector } from "react-redux";
const Column = [
  {
    key: "1",
    title: "Id",
    dataIndex: "id",
  },
  {
    key: "2",
    title: "Skill",
    dataIndex: "skill",
  },
  {
    key: "3",
    title: "Having Knowledge",
    dataIndex: "radioValue",
  },
];
const Tables = () => {
  const dataSource = useSelector((state) => state.form.modalValue);
  return <Table columns={Column} dataSource={[dataSource]}></Table>;
};

export default Tables;
