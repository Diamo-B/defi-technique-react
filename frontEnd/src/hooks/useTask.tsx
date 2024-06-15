import { Dispatch, SetStateAction } from "react";

interface Props {
  executeRefetch: Dispatch<SetStateAction<boolean>>;
  setAlertMessage: Dispatch<SetStateAction<string>>;
  setAlertType: Dispatch<SetStateAction<"error" | "success" | null>>;
  showAlert: Dispatch<SetStateAction<boolean>>;
}


const useTask = ({ executeRefetch, setAlertMessage, setAlertType, showAlert }: Props) => {
  const deleteTask = (id: number): void => {
    fetch("/api/tasks", {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    }).then(async (res) => {
      const data = await res.json();
      if(data.ok){
        setAlertMessage("Task deleted successfully");
        setAlertType("error");
        showAlert(true)
        executeRefetch(true)
      }
    }).catch((err) => {
      console.error(err);
    })
  };

  const editTask = (id: number): void => {
    console.log(id);
  };

  return { deleteTask, editTask }
};

export default useTask;
