import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon1 from "../../../images/icons/share1.svg";
import icon2 from "../../../images/icons/conversation1.svg";
import icon3 from "../../../images/icons/site1.svg";
import icon4 from "../../../images/icons/info.svg";
import arrowDown from "../../../images/icons/downArrow.svg";
import arrowUp from "../../../images/icons/upArrow.svg";

const PaperHeader = () => {
    const [language, setLanguage] = useState(false);

    const languageClick = (props) => {
        setLanguage(props);
    };

    return (
        <div className="paper__header">
            <div className="container">
                <div className="paper__header__wrapper">
                    <p className="text">Aug- 31- 2021</p>
                    <h1>
                        Arweave: A Protocol for Economically Sustainable
                        Information Permanence
                    </h1>
                    <p className="text-info">
                        By Sam Williams, Viktor Diordiiev, Lev Berman, India
                        Raybould, Ivan Uemlianin
                    </p>
                    <p className="version">
                        V1.1 <Link to="/"> (See previous versions)</Link>
                    </p>
                    <div className="header__bottom__wrapper">
                        <div className="header__links__wrapper">
                            <div className="header__links">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="header__links">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="header__links">
                                <img src={icon3} alt="" />
                            </div>
                            <div className="header__links">
                                <img src={icon4} alt="" />
                            </div>
                            <div
                                className="header__language"
                                onClick={() => languageClick(!language)}
                            >
                                <p>
                                    language{" "}
                                    {language ? (
                                        <img
                                            src={arrowUp}
                                            height="5px"
                                            width="7px"
                                            alt="alt"
                                        />
                                    ) : (
                                        <img
                                            src={arrowDown}
                                            height="5px"
                                            width="7px"
                                            alt="alt"
                                        />
                                    )}
                                </p>
                                {language && (
                                    <div className="language__list">
                                        <ul>
                                            <li>Spanish</li>
                                            <li>English</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaperHeader;
