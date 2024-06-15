import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Task as TaskType } from "../types/Task";
import Pagination from "./Pagination";
import Task from "./Task";


interface Props{
  refetchTasks: boolean;
  executeRefetch: Dispatch<SetStateAction<boolean>>;
  setAlertMessage: Dispatch<SetStateAction<string>>;
  setAlertType: Dispatch<SetStateAction<"error" | "success" | null>>;
  showAlert: Dispatch<SetStateAction<boolean>>;
}

const TasksList = ({ refetchTasks, executeRefetch, setAlertMessage, setAlertType, showAlert }:Props) => {

  const [tasks, setTasks] = useState<TaskType[]>([]);
  
  
  useEffect(() => {
    const fetchTasks = () => {
      if(refetchTasks){
        fetch("/api/tasks", {
          method: "get",
          headers: {
            'Content-Type': "application/json"
          }
        }).then(async res => {
          const taskList = await res.json();
          setTasks(taskList);
        }).catch(err => {
          console.error(err);
        })
      }
      executeRefetch(false)
    }
    fetchTasks()
  }, [refetchTasks, executeRefetch]);

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 3;

  // Calculate start and end index for tasks on the current page
  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;

  // Get the tasks for the current page
  const tasksToDisplay = tasks.slice(startIndex, endIndex);

  return (
    <div className="card bg-neutral text-neutral-content border-2 border-primary mt-5 !static">
      <div className="card-body items-center text-center px-0 ">
        <h2 className="card-title text-3xl">Tasks List</h2>
        <div className="min-h-64 w-full flex flex-col gap-2 justify-center">
          {
            tasksToDisplay.length > 0 ?
              tasksToDisplay.map((task: TaskType) => (
                <Task key={task.id} id={task.id} title={task.title} executeRefetch={executeRefetch} setAlertMessage={setAlertMessage} setAlertType={setAlertType} showAlert={showAlert} />
              ))
            :
              <div className="flex items-center">
                <p className="font-bold text-lg">No tasks to display !!</p>
              </div>
          }
        </div>
        <Pagination dataLength={tasks.length}
          currentPage={currentPage}
          onChangePage={setCurrentPage} />
      </div>
    </div>
  );
};

export default TasksList;
