import { useForm } from "react-hook-form";
import MyModal from "../Ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Features/Tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(addTask(data));
    onCancel();
  };

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  return (
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={"programming hero"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            type="text"
            className="w-full rounded-md"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Date
          </label>
          <input
            type="date"
            className="w-full rounded-md"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign To
          </label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="Mir Hussain">Mir Hussain</option>
            <option value="Mezba Abedin">Mezba Abedin</option>
            <option value="Nahid Hasan">Nahid Hasan</option>
          </select>
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue value="High">
              High
            </option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="flex flex-col mb-5">
          <button onClick={onCancel} type="button" className="btn btn-danger">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </MyModal>
  );
};

export default AddTaskModal;
