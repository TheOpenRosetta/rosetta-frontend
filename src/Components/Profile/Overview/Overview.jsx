import React from "react";
// import notes from "../../../images/notes.png";
// import dollar from "../../../images/dollar.png";
// import calender from "../../../images/calender.png";
// import bookmark from "../../../images/bookmark.png";
// import number from "../../../images/number.png";
// import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import FeaturedPapers from "../FeaturedPapers/FeaturedPapers";
import "tippy.js/dist/tippy.css";
import SideBar from "../SideBar/SideBar";
import Activity from "../../Activity/Activity";
const Overview = ({ setActive, info }) => {
    return (
        <div className="overview">
            <div>
                <div className="container">
                    <button className="active" onClick={() => setActive(1)}>
                        Overview
                    </button>
                    <button onClick={() => setActive(2)}>
                        Papers ({info?.paperCount})
                    </button>
                </div>
            </div>
            {/* overview body riad  start from here*/}
            <div className="container">
                <div className="overview__wrapper">
                    <SideBar />
                    <div className="right__content">
                        <div>
                            <p className="title__text">Bio</p>
                            <div className="profile__card">
                                <p>
                                    1 - 👋 Hi, I’m @
                                    {info.normalizedName.split(" ")[0]}
                                </p>
                                <p>2 - 👀 I’m interested in ...</p>
                                <p>3 - 🌱 I’m currently learning ...</p>
                                <p>4 - 💞 I’m Looking to collaborate on ...</p>
                                <p>5 - 📫 How to reach me ...</p>
                            </div>
                        </div>
                        <div>
                            <p className="title__text">Featured Papers</p>

                            <div className="featured__papers">
                                {info.papers.slice(0, 2).map((paper) => (
                                    <FeaturedPapers
                                        key={paper.paperId}
                                        paper={paper}
                                        info={info}
                                    ></FeaturedPapers>
                                ))}
                            </div>
                        </div>
                        <Activity></Activity>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
