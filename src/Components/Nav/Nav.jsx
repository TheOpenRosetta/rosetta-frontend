import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ROSETTA.svg";
import search from "../../images/search-normal.svg";
import { useHistory } from "react-router-dom";
const Nav = ({ show }) => {
    const [burger, setBurger] = useState(false);
    let history = useHistory();
    return (
        <nav className="nav">
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="ROSETTA LOGO" />
                </Link>
                <div className={`nav-menu ${burger ? 'active' : ''}`}>
                  {show && (
                      <div className="nav__search menu__for__desktop">
                          <form>
                              <img src={search} alt="search icon" />
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
                              <button onClick={() => history.push("/paper-details")}>Single Page</button>
                              <button>
                                  <a href="https://rosetta-2.gitbook.io/rosetta-docs/">
                                      Docs
                                  </a>
                              </button>
                              <button>Sign In</button>
                          </>
                      )}
                  </div>
                </div>
                <div
                    className={`menu ${burger ? 'active' : ''}`}
                    onClick={() => setBurger(!burger)}
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
