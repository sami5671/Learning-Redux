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
        {/*  */}
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input type="text" {...register("title")} />

          <div className="flex flex-col mb-5">
            <label htmlFor="Description">Description</label>
            <textarea id="description" {...register("description")} />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="title">Deadline</label>
            <input type="date" id="date" {...register("date")} />
          </div>

          {/* <div className="flex flex-col mb-5">
            <label htmlFor="title">Deadline</label>
            <input type="date" id="date" {...register("date")} />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title">Deadline</label>
            <input type="date" id="date" {...register("date")} />
          </div> */}

          {/*  */}
          <button
            onClick={() => onCancel()}
            type="button"
            className="bg-red-500"
          >
            cancel
          </button>
          <button type="submit" className="bg-green-500">
            Submit
          </button>
        </div>
      </form>
    </MyModal>
  );
};

export default AddTaskModal;
