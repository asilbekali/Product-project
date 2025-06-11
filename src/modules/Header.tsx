import { ModeIcon } from "../assets/icons";
import LogoImg from "../assets/images/Group.svg";
import Buttons from "../components/Buttons";
import NavItems from "../components/NavItems";

const Header = () => {
    const navItems = ["Products", "Customers", "Pricing", "Resource"];

    const handleModeeIconClick = () => document.body.classList.toggle("mode")

    return (
        <header className="py-[18px]">
            <div className="containers flex items-center justify-between ">
                <a className="flex items-center gap-4" href="#">
                    <img src={LogoImg} alt="Logo img" width={40} height={36} />
                    <strong className="text-[var(--clr-text)] text-[30px] leading-[28px]">Product</strong>
                </a>
                <div className="flex items-center gap-[24px]">
                    <ul className="flex items-center gap-[30px]">{navItems.map((item, index) => <NavItems title={item} key={index} />)}</ul>
                    <Buttons extraClass="!bg-transparent  !border-[#BCD0E5]  !text-[var(--clr-text)]" title="Sign In" type="button" />
                    <Buttons title="Sign Up" type="button" />
                    <button onClick={handleModeeIconClick} className="bg-[#F3F3F3] p-[4px] cursor-pointer text-[var(--clr-light-green)] rounded-full"><ModeIcon /></button>
                </div>
            </div>
        </header>
    );
};

export default Header;
