import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ROSETTA.svg";
import search from "../../images/search-normal.svg";
const Nav = ({ show }) => {
    const menu = useRef(null);
    const handleHamburger = () => {
        document.getElementById("button1").classList.toggle("active");
    };
    return (
        <nav className="nav">
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="ROSETTA LOGO" />
                </Link>
                {show && (
                    <div className="nav__search menu__for__desktop">
                        <form>
                            <img src={search} alt="" />
                            <input
                                type="text"
                                placeholder="Search for authors |"
                            />
                            <button type="submit">Search</button>
                        </form>
                        <div>
                            <Link>Sign In</Link>
                        </div>
                    </div>
                )}
                <div className="menu__for__desktop">
                    {show ? (
                        <button>Create Free Account</button>
                    ) : (
                        <>
                            <button>
                                <a href="https://rosetta-2.gitbook.io/rosetta-docs/">
                                    Docs
                                </a>
                            </button>
                            <button>Sign In</button>
                        </>
                    )}
                </div>
                <div
                    className="menu"
                    id="button1"
                    ref={menu}
                    onClick={handleHamburger}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
