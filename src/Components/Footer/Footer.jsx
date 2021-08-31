import React from "react";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import card from "../../images/Cards@2x.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__left">
                        <h2>Help Make Knowledge Beautiful Again</h2>
                        <p>
                            The Rosetta Foundation is a non-profit on a mission
                            to make knowledge a beautiful global public good
                            once again. It’s 100% open-source to build on top
                            of. Built, owned, and operated by a community of
                            open source developers like yourself.{" "}
                        </p>
                        <div>
                            <button>Developer Docs</button>
                            <button>Apply for Grants</button>
                        </div>
                    </div>
                </div>
                <img src={card} alt="" />
            </div>
            <div className="footer__bottom ">
                <div className="container">
                    <small>Say hi: team@openrosetta.org</small>
                    <div>
                        <a href="#">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="#">
                            <img src={facebook} alt="" />
                        </a>

                        <a href="#">
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
