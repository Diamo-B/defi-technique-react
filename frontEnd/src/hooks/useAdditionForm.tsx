import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Task, schema } from "../types/Task";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setAlertMessage: Dispatch<SetStateAction<string>>;
  setAlertType: Dispatch<SetStateAction<"error" | "success" | null>>;
  showAlert: Dispatch<SetStateAction<boolean>>;
  refetch: ()=>void;
}


const useAdditionForm = ({ setAlertMessage, setAlertType, showAlert, refetch }:Props) => {
  const { handleSubmit, register, reset, formState:{errors} } = useForm<Task>({
    resolver: zodResolver(schema),
  });

  const addTask = (data: Task): void => {
    fetch("/api/tasks",{
      method:'post',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        task: data.title
      })
    }).then(() =>{
      setAlertType("success");
      setAlertMessage("task added successfully");
      reset();
      refetch();
    })
    .catch((err)=>{
      console.error(err);
      setAlertType("error");
      setAlertMessage("an unexpected error has occured")
    })
    showAlert(true);
  };

  return { register, handleSubmit, addTask, errors };
};

export default useAdditionForm;
