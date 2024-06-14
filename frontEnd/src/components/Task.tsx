import useTask from "../hooks/useTask";

interface Props {
  id: number;
  text: string;
}

const Task = ({ id, text }: Props) => {
  const {editTask, deleteTask} = useTask();

  return (
    <div className="flex justify-between items-center py-3 w-full">
      <span>{text}</span>
      <div className="flex gap-3">
        <button className="btn btn-outline btn-warning !border-2 w-20 min-h-fit h-fit py-2 rounded-full hover:!text-white"
          onClick={()=>{
            editTask(id)
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-outline btn-error !border-2 min-h-fit h-fit py-2 rounded-full hover:!text-white"
          onClick={() => {
            deleteTask(id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Task;
