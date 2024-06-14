import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Task, schema } from "../types/Task";

const useAdditionForm = () => {
  const { handleSubmit, register, reset } = useForm<Task>({
    resolver: zodResolver(schema),
  });

  const addTask = (data: Task): void => {
    console.log(data);
    reset();
  };

  return { register, handleSubmit, addTask };
};

export default useAdditionForm;
