import React from "react";
import notes from "../../../images/notes.png";
import dollar from "../../../images/dollar.png";
import calender from "../../../images/calender.png";
import bookmark from "../../../images/bookmark.png";
import number from "../../../images/number.png";
const Overview = () => {
    return (
        <div className="overview">
            <div>
                <button className="active">Overview</button>
                <button>Papers ({20})</button>
            </div>
            <div>
                <p>My Bio</p>
                <div className="profile__card">
                    <p>1 - 👋 Hi, I’m @anthony</p>
                    <p>2 - 👀 I’m interested in ...</p>
                    <p>3 - 🌱 I’m currently learning ...</p>
                    <p>4 - 💞 I’m Looking to collaborate on ...</p>
                    <p>5 - 📫 How to reach me ..</p>
                </div>
            </div>
            <div>
                <p>Popular Papers</p>
                <div className="profile__card profile__popular__papers">
                    <div className="">
                        <div>
                            <img src={notes} alt="" />
                            <span>
                                Estimation of the warfarin dose with clinical
                                and pharmacogenetic data
                            </span>
                        </div>
                        <div>
                            <div>
                                <img src={dollar} alt="" />
                                <span>APR 9301%</span>
                            </div>
                            <div>
                                <img src={number} alt="" />
                                <span>APR 9301%</span>
                            </div>
                            <div>
                                <img src={bookmark} alt="" />
                                <span>APR 9301%</span>
                            </div>
                            <div>
                                <img src={calender} alt="" />
                                <span>APR 9301%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
