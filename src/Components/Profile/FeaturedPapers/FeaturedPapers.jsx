import React from "react";
import coma from "../../../images/icons/Coma.svg";
import like from "../../../images/icons/thumbs-up.svg";
import dollar from "../../../images/icons/dollar-icon.svg";
// import bookmark from "../../../images/icons/bookmark.svg";
// import bell from "../../../images/icons/bell.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
const FeaturedPapers = ({ paper, info }) => {
    return (
        <div className="Featured__papers">
            <Link to="/paper-details">{paper.paperTitle}</Link>
            <p>
                <span>Paola Peynetti Velázquez, G. Gupta,</span>
                <span>+4 authour</span>
                <span> Mutheiwana Dombo Business </span>
                <span>, {paper.date.substring(0, 10)}</span>
            </p>
            <p>
                He option of phone and video visits has expanded access to care
                for a vulnerable population during a time of social distancing
                and isolation, and has led to improved no-show rates and
                opportunities… Expand
            </p>
            <div className="feature__wrapper">
                <div>
                    <img src={coma} alt="" />
                    <span>45</span>
                </div>
                <div>
                    <img src={like} alt="" />
                    <span>45</span>
                </div>
                <div>
                    <Tippy content="APR Yield">
                        <img src={dollar} alt="" />
                    </Tippy>
                    <span>
                        APR{" "}
                        {(
                            (info.prbScore * 1000) /
                            Math.max(
                                1,
                                ((info.prbScore +
                                    0.005 -
                                    (new Date().getFullYear() - paper.year) /
                                        50) /
                                    10) *
                                    1000
                            )
                        ).toFixed(2)}
                        %
                    </span>
                </div>
                {/* <div>
                    <img src={bookmark} alt="" />
                    <span>Save</span>
                </div>
                <div>
                    <img src={bell} alt="" />
                    <span>Alert</span>
                </div> */}
            </div>
        </div>
    );
};

export default FeaturedPapers;
