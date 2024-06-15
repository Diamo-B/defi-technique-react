import { useState } from "react";
import AdditionForm from "./components/AdditionForm";
import TasksList from "./components/TasksList";
import Alert from "./components/Alert";


/* 
  PS: Since this is a small project, and i've got limited time, I have simplified a couple thing. So if this was a large project:
  + I would have used redux toolkit for things like the alert and the tasks states
  + I would have used a state for tasks and added to it or removed tasks from it without refetching the tasks from the backend after each deletion/addition. 
  + I would finally have used soft deletion in the backend using some kind of boolean flag instead of totally removing the task.
*/

function App() {
  const [alert, showAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [alertType, setAlertType] = useState<"error" | "success" | null>(null);
  const [refetch, executeRefetch] = useState<boolean>(true);
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="card w-2/4 border-2 border-primary p-10 bg-neutral text-neutral-content ">
          <AdditionForm setAlertMessage={setAlertMessage} setAlertType={setAlertType} showAlert={showAlert} refetch={()=>executeRefetch(true)}/>
          <TasksList refetchTasks={refetch} executeRefetch={ executeRefetch} setAlertMessage={setAlertMessage} setAlertType={setAlertType} showAlert={showAlert} />
        </div>
      </div>
      {
        alert && <Alert close={() => showAlert(false)} type={alertType} message={alertMessage} />
      }
    </>
  );
}

export default App;
