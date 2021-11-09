import React from "react";
// import notes from "../../../images/notes.png";
// import dollar from "../../../images/dollar.png";
// import calender from "../../../images/calender.png";
// import bookmark from "../../../images/bookmark.png";
// import number from "../../../images/number.png";
// import { Link } from "react-router-dom";
import FeaturedPapers from "../FeaturedPapers/FeaturedPapers";
import SideBar from "../SideBar/SideBar";
const Papers = ({ setActive, info }) => {
    return (
        <div className="papers">
            <div>
                <div className="container">
                    <button onClick={() => setActive(1)}>Overview</button>
                    <button className="active" onClick={() => setActive(2)}>
                        Papers ({info?.paperCount})
                    </button>
                </div>
            </div>
            <div className="container paper__wrapper">
                <SideBar />
                <div>
                    <p className="title__text">Papers</p>
                    {info.papers.map((paper) => (
                        <FeaturedPapers
                            key={paper.paperId}
                            paper={paper}
                            info={info}
                        ></FeaturedPapers>
                    ))}
                </div>
                {/* {info?.papers?.map((x) => (
                    <div>
                        <div>
                            <img src={notes} alt="" />
                            <div>
                                <p>
                                    <Link>{x.paperTitle}</Link>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Tippy content="Investment Return">
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
                                                (x.year -
                                                    new Date().getFullYear()) /
                                                    50) /
                                                10) *
                                                1000
                                        )
                                    ).toFixed(2)}
                                    %
                                </span>
                            </div>
                            <div>
                                <Tippy content="Market Price">
                                    <img src={number} alt="" />
                                </Tippy>
                                <span>
                                    {Math.max(
                                        1,
                                        ((info.prbScore +
                                            0.005 -
                                            (x.year -
                                                new Date().getFullYear()) /
                                                50) /
                                            10) *
                                            1000
                                    ).toFixed(2)}
                                </span>
                            </div>
                            <div>
                                <Tippy content="Citation Count">
                                    <img src={bookmark} alt="" />
                                </Tippy>
                                <span>{x.citationCount}</span>
                            </div>
                            <div>
                                <Tippy content="Publication Date">
                                    <img src={calender} alt="" />
                                </Tippy>
                                <span>{x.date.slice(0, 4)}</span>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default Papers;
