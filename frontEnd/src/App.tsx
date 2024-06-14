import AdditionForm from "./components/AdditionForm";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="card w-2/4 border-2 border-white p-10 bg-neutral text-neutral-content ">
        <AdditionForm />
        <TasksList />
      </div>
    </div>
  );
}

export default App;
