import React from "react";
import notes from "../../../images/notes.png";
import dollar from "../../../images/dollar.png";
import calender from "../../../images/calender.png";
import bookmark from "../../../images/bookmark.png";
import number from "../../../images/number.png";
const Papers = ({ setActive }) => {
    return (
        <div className="papers">
            <div>
                <button onClick={() => setActive(1)}>Overview</button>
                <button className="active" onClick={() => setActive(2)}>
                    Papers ({20})
                </button>
            </div>
            <div>
                {/* data map here */}
                <div>
                    <div>
                        <img src={notes} alt="" />
                        <div>
                            <p>
                                Estimation of the warfarin dose with clinical
                                and pharmacogenetic data
                            </p>
                            <p>
                                Angel investor, Formerly CTO of coinbase and GP
                                at Andreessen horowitz, Cofounder of earn
                                counsyl teleport and coin center.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={dollar} alt="" />
                            <span>APR 9301%</span>
                        </div>
                        <div>
                            <img src={number} alt="" />
                            <span>9301</span>
                        </div>
                        <div>
                            <img src={bookmark} alt="" />
                            <span>870</span>
                        </div>
                        <div>
                            <img src={calender} alt="" />
                            <span>2021</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={notes} alt="" />
                        <div>
                            <p>
                                Estimation of the warfarin dose with clinical
                                and pharmacogenetic data
                            </p>
                            <p>
                                Angel investor, Formerly CTO of coinbase and GP
                                at Andreessen horowitz, Cofounder of earn
                                counsyl teleport and coin center.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={dollar} alt="" />
                            <span>APR 9301%</span>
                        </div>
                        <div>
                            <img src={number} alt="" />
                            <span>9301</span>
                        </div>
                        <div>
                            <img src={bookmark} alt="" />
                            <span>870</span>
                        </div>
                        <div>
                            <img src={calender} alt="" />
                            <span>2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Papers;
