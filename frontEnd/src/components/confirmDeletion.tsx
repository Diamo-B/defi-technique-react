interface Props {
    taskId: number;
    deleteTask: (id: number) => void;
    closeModal: () => void;
}
const ConfirmDeletion = ({ taskId, deleteTask, closeModal }: Props) => {
    return (
        <div className="w-full h-full rounded-2xl absolute top-0 left-0 flex justify-center items-center bg-neutral/90">
            <div className="card w-2/4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className="font-semibold text-lg">Are you sure you want to delete this task ?</p>
                    <div className="card-actions justify-end">
                        <button className="action-button btn-secondary hover:!text-slate-900"
                            onClick={closeModal}
                        >Cancel</button>
                        <button className="action-button btn-primary hover:!text-slate-900"
                            onClick={() => {
                                deleteTask(taskId);
                            }}
                        >Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDeletion;