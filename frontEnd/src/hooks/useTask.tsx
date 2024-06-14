const useTask = () => {
  const deleteTask = (id: number):void => {
    console.log(id);
  };

  const editTask = (id: number):void => {
    console.log(id);
  };

  return  {deleteTask, editTask}
};

export default useTask;
