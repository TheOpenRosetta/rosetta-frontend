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
                            Rosetta is neither a non-profit., nor a profit. It’s
                            a global co-operative that is community built,
                            owned, and managed by authors for authors. It’s on a
                            mission to make knowledge a beautiful global public
                            good once again. It’s 100% open-source to build on
                            top for a just, and inclusive knowledge commons.
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
