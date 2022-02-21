/* eslint-disable */
import React, { useEffect, useState } from "react";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
// import linkedin from "../../images/linkedin.svg";

import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
const Footer = () => {
    const [star, setStar] = useState(0);
    useEffect(() => {
        fetch("https://api.github.com/repos/TheOpenRosetta/rosetta-frontend")
            .then((response) => response.json())
            .then((json) => setStar(json.stargazers_count));
    }, []);
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__left">
                        <h2>ROSETTA</h2>
                        <p>
                            A proud new author owned non-profit building the
                            most powerful open digital infrastructure for all
                            authors.
                        </p>
                    </div>
                    <div className="footer__right">
                        <div>
                            <p>Rosetta</p>
                            <Link to="/features/">Features</Link>
                            <Link to="/developers/">Developers</Link>
                            <a href="https://rosetta-2.gitbook.io/rosetta-docs/">
                                Docs
                            </a>
                            <Link to="/spread/">Spread</Link>
                        </div>
                        <div>
                            <p>Rosetta</p>
                            <Link to="/about/">About</Link>
                            <Link to="/authors">Authors</Link>
                            <Link to="/careers">Careers</Link>
                            <Link to="/faq/">FAQ</Link>
                        </div>
                        <div>
                            <p>Contact</p>
                            <a href="/feature">hello@openrosetta.org</a>
                            <div className="github__star">
                                <p>
                                    <GitHubIcon></GitHubIcon> Star
                                </p>
                                <p>
                                    <small>{star}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bye__bye container">
                    <div className="social__link__wrapper">
                        <a href="https://github.com/TheOpenRosetta">
                            <div>
                                <img src={facebook} alt="" />
                            </div>
                        </a>
                        <a href="https://twitter.com/rosettaopen">
                            <div>
                                <img src={twitter} alt="" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="container" style={{ marginTop: "15px" }}>
                    <p>Open Rosetta Foundation </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
