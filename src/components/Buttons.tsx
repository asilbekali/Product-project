import type { FC } from "react";
import type { ButtonType } from "../types/ButtonTypes";

const Buttons: FC<ButtonType> = ({ type, title, extraClass }) => {
    return (
        <button
            className={` ${extraClass} cursor-pointer border-[1px] border-[var(--clr-light-green)] py-[10px] px-[24px] rounded-[4px] bg-[var(--clr-light-green)] text-white font-semibold  text-[16px]`}type={type}>{title}
        </button>
    );
};

export default Buttons;
