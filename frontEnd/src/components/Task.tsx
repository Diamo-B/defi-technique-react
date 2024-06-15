import { Dispatch, SetStateAction, useState } from "react";
import useTask from "../hooks/useTask";
import ConfirmDeletion from "./confirmDeletion";

interface Props {
  id: number;
  title: string;
  executeRefetch: Dispatch<SetStateAction<boolean>>;
  setAlertMessage: Dispatch<SetStateAction<string>>;
  setAlertType: Dispatch<SetStateAction<"error" | "success" | null>>;
  showAlert: Dispatch<SetStateAction<boolean>>;
}


const Task = ({ id, title, executeRefetch, setAlertMessage, setAlertType, showAlert }: Props) => {
  const { deleteTask } = useTask({executeRefetch, setAlertMessage, setAlertType, showAlert});
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between items-center py-3 px-10 w-full hover:bg-slate-700/30 hover:cursor-pointer max-w-full">
        <span className="overflow-hidden">{title.length > 40 ? title.slice(0, 40) + " ...." : title}</span>
        <div className="flex gap-3">
          <button
            className="action-button btn-error hover:!text-slate-900"
            onClick={() => setShow(true)}
          >
            Remove
          </button>
        </div>
      </div>
      {
        show &&
        <ConfirmDeletion taskId={id} deleteTask={deleteTask} closeModal={() => setShow(false)} />
      }
    </>
  );
};

export default Task;
