import React from "react";
import "./style.css";


const Header = (props) => {
    const { headerText, icon } = props;

    return (
        <div className="wrapper d-flex align-items-center justify-content-between">
            <h2 className="pb-3 pt-3">{headerText}</h2>
            <span>{icon}</span>
        </div>
    )
}

export default Header;