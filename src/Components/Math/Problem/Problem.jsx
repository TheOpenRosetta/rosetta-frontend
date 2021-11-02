import React from "react";
import time from "../../../images/icons/Time.svg";
import authors from "../../../images/icons/authors-Icon.svg";

const Problem = () => {
    return (
        <div className="problem">
            <div className="problem__left">
                <h1>
                    Carbon nanotube/manganese oxide ultrathin film electrodes
                    for electrochemical capacitors.
                </h1>
                <p>
                    The electrodes are generated with two simple aqueous
                    deposition processes: the layer-by-layer assembly...
                </p>
                <div>
                    <div>
                        <img src={time} alt="" />
                        <p>
                            <span> Time left: </span> 12 Years, 7days
                        </p>
                    </div>
                    <div>
                        <img src={authors} alt="" />
                        <p>
                            <span>Authors Attempting: </span> 59
                        </p>
                    </div>
                </div>
            </div>
            <div className="problem__right">
                <div>
                    <p>Replication Pool</p>
                    <h1>$100,000</h1>
                </div>
                <div>
                    <p>Falsification Pool</p>
                    <h1>$37,000</h1>
                </div>
            </div>
        </div>
    );
};

export default Problem;
