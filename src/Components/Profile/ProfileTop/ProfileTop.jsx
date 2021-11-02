import React from "react";
// import icon1 from "../../../images/followers -icon.svg";
// import icon2 from "../../../images/identification-icon.svg";
// import icon3 from "../../../images/bookmark-icon.svg";
// import Sponsor from "./Sponsors/Sponsor";
// import Tippy from "@tippyjs/react";
import profile from "../../../images/profile_img.png";
import "tippy.js/dist/tippy.css";
const ProfileTop = ({ info }) => {
    return (
        <div className="profile__top">
            <div className="upper__grid container">
                <img className="profile__img" src={profile} alt="" />
                <div className="profile__info">
                    <h3>{info?.displayName}</h3>
                    <p>Open academic. Working on what I love.</p>
                    <div className="amount">
                        <p>Academic Fraud Committed:</p>
                        <span>No</span>
                        <p>ImpactScore: </p>
                        <p className="claim-btn">&nbsp;10,0000</p>
                    </div>
                    <div className="btn-group">
                        <p>Follow</p>
                        <p>Sponsor</p>
                    </div>
                </div>
                <div>
                    <p>Rosetta Tokens Available</p>
                    <div>
                        <div>
                            <p>$50,000 </p>
                            <small>Once off accrued tokens</small>
                        </div>
                        <div>
                            <p>$10,000</p>
                            <small>Monthly Ongoing Tokens</small>
                        </div>
                    </div>
                    <button>Claim both</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileTop;
