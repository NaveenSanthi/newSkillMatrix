import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { toggleAction } from "../store/ModalToggle";
import { useSelector } from "react-redux/es/exports";
import Forms from "../FormComponent/Forms";
// import { FormReducerAction } from "../store/FormReducers";
const Inputmodal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.modal.isModalVisible);
  const value = useSelector((state) => state.form.modalValue);
  const handleOk = () => {
    console.log(value);
    dispatch(toggleAction.closeModal());
  };
  const handleCancel = () => {
    dispatch(toggleAction.closeModal());
  };
  return (
    <Modal
      visible={isVisible}
      title="Employee Skill Enrollment"
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <Forms />
    </Modal>
  );
};
export default Inputmodal;
