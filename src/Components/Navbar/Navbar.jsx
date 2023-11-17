import React, { useRef,  useState } from "react";
import { FaReact, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { HiX } from "react-icons/hi";
import "./style.css";

const data = [
    {
        label: "HOME",
        to: "home"
    },
    {
        label: "ABOUT ME",
        to: "about"
    },
    {
        label: "SKILLS",
        to: "skills"
    },
    {
        label: "RESUME",
        to: "resume"
    },
    {
        label: "PORTFOLIO",
        to: "portfolio"
    },
    {
        label: "CONTACT",
        to: "contact"
    }
]


const Navbar = () => {
    const [ResMode, setResMode] = useState(false);
    const LinkesMode = useRef();

    const HandlleResMode = () => {
        setResMode(!ResMode)
    };

    const HandleLinksMode = () => {
        LinkesMode.current.classList.remove("active");
        setResMode(!ResMode)
    }

    return (
        <div className="container-nav">
            <nav className="navbar-menu d-flex align-items-center justify-content-center">
                <div className="navbar__container d-flex align-items-center w-100">
                    <Link to="/" spy={true} smooth={true} offset={0} duration={100} className="navbar__container-logo">
                        <FaReact size={35} />
                    </Link>
                </div>

                <ul ref={LinkesMode} className={`navbar__container__menu d-flex ${ResMode ? "active" : ""}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link to={item.to} spy={true} smooth={true} offset={-40} duration={100} onClick={HandleLinksMode}>{item.label}</Link>
                                <div className="marker"></div>
                            </li>
                        ))
                    }
                </ul>

                <div className="menu__bar__responsive__icon" onClick={HandlleResMode}>
                    {
                        ResMode ? <HiX size={40} className="close"/> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;