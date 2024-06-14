import useAdditionForm from "../hooks/useAdditionForm";

const AdditionForm = () => {
  const { handleSubmit, addTask, register } = useAdditionForm();
  return (
    <form onSubmit={handleSubmit(addTask)} className="flex gap-2">
      <input
        type="text"
        placeholder="Type here"
        className="input input-primary input-bordered w-full"
        {...register("taskName")}
      />
      <button type="submit" className="btn btn-outline btn-primary px-10">New Task</button>
    </form>
  );
};

export default AdditionForm;
