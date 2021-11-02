import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const Activity = () => {
    return (
        <div className="activity">
            <p>Activity</p>
            <div className="activity__button">
                <button className="active">2021</button>
                <button>2022</button>
                <button>2023</button>
            </div>
            <div className="activity__table">
                <div>
                    <div className="activity__table__month">
                        <div></div>
                        <div>
                            {months.map((month) => (
                                <div
                                    className={
                                        month > 1 &&
                                        "small" &&
                                        month > 2 &&
                                        "large"
                                    }
                                >
                                    {month}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="activity__table__contribution">
                        <div>Papers Written</div>
                        <div>
                            {paperWritten.map((month) => (
                                <Tippy content={`${month} Contribution`}>
                                    <div
                                        className={
                                            month > 1 &&
                                            "small" &&
                                            month > 2 &&
                                            "large"
                                        }
                                    >
                                        {}
                                    </div>
                                </Tippy>
                            ))}
                        </div>
                    </div>
                    <div className="activity__table__contribution">
                        <div>Citations</div>
                        <div>
                            {citation.map((month) => (
                                <Tippy content={`${month} Contribution`}>
                                    <div
                                        className={
                                            month > 1 &&
                                            "small" &&
                                            month > 2 &&
                                            "large"
                                        }
                                    >
                                        {}
                                    </div>
                                </Tippy>
                            ))}
                        </div>
                    </div>
                    <div className="activity__table__contribution">
                        <div>Papers Replicated</div>
                        <div>
                            {paperReplicated.map((month) => (
                                <Tippy content={`${month} Contribution`}>
                                    <div
                                        className={
                                            month > 1 &&
                                            "small" &&
                                            month > 2 &&
                                            "large"
                                        }
                                    >
                                        {}
                                    </div>
                                </Tippy>
                            ))}
                        </div>
                    </div>
                    <div className="activity__table__contribution">
                        <div>Questions Answered</div>
                        <div>
                            {questionAns.map((month) => (
                                <Tippy content={`${month} Contribution`}>
                                    <div
                                        className={
                                            month > 3 &&
                                            "small" &&
                                            month > 4 &&
                                            "large"
                                        }
                                    >
                                        {}
                                    </div>
                                </Tippy>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const paperWritten = [
    3, 2, 4, 5, 2, 4, 0, 1, 4, 0, 4, 3, 6, 3, 4, 7, 3, 4, 7, 3, 4, 6, 8, 3, 8,
    9, 2, 3, 8, 2, 3, 4, 6, 3, 4, 5, 3, 6, 2, 5, 3, 0, 4, 7, 2, 3, 9, 2, 3, 8,
    2, 3, 4, 6, 3,
];
const citation = [
    3, 2, 4, 5, 2, 4, 0, 1, 4, 0, 4, 3, 6, 3, 4, 7, 3, 4, 7, 3, 4, 6, 8, 3, 8,
    9, 1, 3, 8, 2, 0, 4, 0, 0, 1, 5, 3, 6, 2, 5, 3, 0, 4, 7, 0, 3, 0, 2, 3, 8,
    2, 3, 4, 6, 3,
];
const paperReplicated = [
    3, 2, 4, 5, 2, 4, 0, 1, 4, 0, 4, 3, 6, 3, 4, 7, 3, 4, 7, 3, 4, 6, 8, 3, 8,
    9, 2, 3, 8, 2, 3, 4, 6, 3, 4, 5, 3, 6, 2, 5, 3, 0, 4, 7, 2, 3, 9, 2, 3, 8,
    2, 3, 4, 6, 3,
];
const questionAns = [
    3, 2, 4, 5, 2, 4, 0, 1, 4, 0, 4, 3, 6, 3, 4, 7, 3, 4, 7, 3, 4, 6, 8, 3, 8,
    9, 1, 3, 8, 2, 0, 4, 0, 0, 1, 5, 3, 6, 2, 5, 3, 0, 4, 7, 0, 3, 0, 2, 3, 8,
    2, 3, 4, 6, 3,
];
console.log(paperWritten.length);
