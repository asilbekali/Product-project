import type { Dispatch, FC, SetStateAction } from "react";
import { CloseIcon } from "../assets/icons";

const Modal: FC<{ mode: boolean, setMode: Dispatch<SetStateAction<boolean>> }> = ({ mode, setMode }) => {
    return (
        <div 
            id="wrapper" 
            onClick={(e) => (e.target as HTMLDivElement).id == "wrapper" && setMode(false)} 
            className={`fixed top-0 bottom-0 ${mode ? "left-0" : "left-[100%]"} right-0 bg-[#00000027] backdrop-blur-[5px] z-50`}
        >
            <div 
                className={`absolute duration-300 h-[100vh] ${mode ? "right-0" : "right-[-100%]"} w-[75%] bg-[#fff] shadow-md z-60`}
            >
                <button 
                    onClick={() => setMode(false)} 
                    className={`absolute ${mode ? "" : "hidden"} right-[15px] top-[5px] text-[var(--clt-text)]`}
                >
                    <CloseIcon />
                </button>
            </div>
        </div>
    );
};

export default Modal;
