import { Dispatch, SetStateAction } from "react";
import useAdditionForm from "../hooks/useAdditionForm";

interface Props {
  setAlertMessage: Dispatch<SetStateAction<string>>;
  setAlertType: Dispatch<SetStateAction<"error" | "success" | null>>;
  showAlert: Dispatch<SetStateAction<boolean>>;
  refetch: ()=>void;
}

const AdditionForm = ({ setAlertMessage, setAlertType, showAlert, refetch }:Props) => {

  const { handleSubmit, addTask, register, errors } = useAdditionForm({ showAlert, setAlertMessage, setAlertType, refetch });
  
  return (
    <form onSubmit={handleSubmit(addTask)} className="flex gap-2">
      <input
        type="text"
        placeholder={errors.title?.message || "Type here"}
        className={`input input-primary input-bordered w-full font-bold focus:outline-none ${errors.title? "placeholder:text-error" : ""}`}
        {...register("title")}
      />
      <button type="submit" className="btn btn-outline btn-primary px-10">New Task</button>
    </form>
  );
};

export default AdditionForm;
