import React from "react";
import followers from "../../../images/icons/followers.svg";
import following from "../../../images/icons/following.svg";
import communities from "../../../images/icons/communities.svg";
import achievement1 from "../../../images/blueAChievement.png";
import achievement2 from "../../../images/redAchievement.png";
import achievement3 from "../../../images/silverAchievement.png";

const SideBar = () => {
    return (
        <div className="side__bar">
            <div className="container">
                <div className="social__numbers">
                    <img src={followers} alt="" />
                    <p>
                        14k <span> followers</span>
                    </p>
                </div>
                <div className="social__numbers">
                    <img src={following} alt="" />
                    <p>
                        4k <span> following</span>
                    </p>
                </div>
                <div className="social__numbers">
                    <img src={communities} alt="" />
                    <p>
                        20 <span> communities</span>
                    </p>
                </div>
                <div className="achievement">
                    <p>Achievements</p>
                    <img src={achievement1} alt="" />
                    <img src={achievement2} alt="" />
                    <img src={achievement3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
