import { useSelector } from "react-redux";
import MyModal from "./../Ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { tasks } = useSelector((state) => state.tasksSlice);
  const task = tasks.find((item) => item.id === id);

  console.log(id);

  return (
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
      {task?.description}
    </MyModal>
  );
};

export default TaskDetailsModal;
