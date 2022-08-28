import { Card, Button, Table } from "antd";
import { useDispatch } from "react-redux";
import { toggleAction } from "../store/ModalToggle";
import { PlusOutlined } from "@ant-design/icons";
import Inputmodal from "../modal/inputModal";
import classes from "./Dashboard.module.css";
import Tables from "../Table/Tables";

const Dashboard = () => {
  const dispatch = useDispatch();

  const buttonOnClick = () => {
    dispatch(toggleAction.openModal());
  };
  return (
    <div>
      <Card className={classes.entrollButtonContainer}>
        <Button
          onClick={buttonOnClick}
          className={classes.enrollButton}
          shape="default"
          icon={<PlusOutlined />}
          size="large"
        >
          Enroll Skill
        </Button>
      </Card>
      <Inputmodal />
      <Tables />
    </div>
  );
};
export default Dashboard;
