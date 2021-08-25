import React from "react";
import logo from "../../images/ROSETTA.svg";
const Nav = () => {
    return (
        <nav className="nav">
            <div className="container">
                <img src={logo} alt="ROSETTA LOGO" />
                <button>Claim Rewards</button>
            </div>
        </nav>
    );
};

export default Nav;
