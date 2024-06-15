import { useEffect, useState } from "react";

interface Props {
    type: "error" | "success" | null;
    message: string;
    close: () => void;
}

const Alert = ({ type, message, close }: Props) => {
    const [alertClassName, setAlertClassName] = useState<string | null>();

    useEffect(() => {
        const timerId = setTimeout(()=>{
            close()
        },2300)

        return () => clearTimeout(timerId);
    }, [close]);

    useEffect(() => {
        if (type !== null) {
            setAlertClassName(`alert-${type}`)
        }
        else {
            setAlertClassName(`border border-white`)
        }
    }, [type]);

    return (
        <div className="toast toast-top toast-end">
            <div className={`alert ${alertClassName} `}>
                <span className="font-bold text-slate-100 capitalize">{message}</span>
                <span className="btn btn-circle btn-xs btn-outline" onClick={close}>X</span>
            </div>
        </div>
    );
}

export default Alert;