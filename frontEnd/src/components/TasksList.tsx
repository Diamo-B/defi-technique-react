import { Task as TaskType } from "../types/Task";
import Pagination from "./Pagination";
import Task from "./Task";

const TasksList = () => {

  const tasks:TaskType[] =[
    {id:1, text: 'task1'},
    {id:2, text: 'task2'},
    {id:3, text: 'task3'},
    {id:4, text: 'task4'},
  ] 
  return (
    <div className="card bg-neutral text-neutral-content border-2 mt-5">
      <div className="card-body items-center text-center ">
        <h2 className="card-title text-2xl">Tasks List</h2>
        <div className="min-h-64 w-full grid grid-cols-1">
          {
            tasks.length > 0 ? 
              tasks.map((task: TaskType)=>(
                <Task id={task.id} text={task.text}/>
              ))
            :
              <p>Add a new task</p>
          }
        </div>
        <Pagination/>
      </div>
    </div>
  );
};

export default TasksList;
