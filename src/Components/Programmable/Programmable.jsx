import React from "react";
import paper from "../../images/paper-group.png";
import tick from "../../images/tick.svg";
const Programmable = () => {
    return (
        <section className="programmable container">
            <div>
                <p>Programmable papers </p>
                <p>The future of publishing has arrived</p>
            </div>
            <div className="programmable__grid">
                <div>
                    <img src={paper} alt="" />
                </div>
                <div>
                    <p>
                        <img src={tick} alt="Tick" />
                        <span>
                            No pre-print, no post print. A continuous living
                            breahting document.
                        </span>
                    </p>
                    <p>
                        <img src={tick} alt="Tick" />
                        <span>
                            Forget rank order, and static citations. Assign
                            percentage weights to collaborators & co-authors as
                            well as citations at the time of publication.
                        </span>
                    </p>
                    <p>
                        <img src={tick} alt="Tick" />
                        <span>
                            Paper level metrics to measure: plausability,
                            originality, scientific & society value.
                        </span>
                    </p>
                    <p>
                        <img src={tick} alt="Tick" />
                        <span>
                            Add tags/context to citations to determine whether
                            its positive, negative, and more.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Programmable;
