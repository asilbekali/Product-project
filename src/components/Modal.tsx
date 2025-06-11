import { CloseIcon } from "../assets/icons"


const Modal = () => {
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000027] backdrop-blur-[5px]">
            <div className="absolute duration-300 h-[100vh] w-[80%] bg-white shadow-md right-0 ">
                <button className="absolute right-[15px] top-[5px] text-[var(--clt-text)]"> <CloseIcon /> </button>
            </div>
        </div>
    )
}

export default Modal