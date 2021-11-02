import React from "react";
import img1 from "../../../images/techstars.svg";
import img2 from "../../../images/quantstamp.png";
import img3 from "../../../images/combinator.png";
import img4 from "../../../images/grab.png";
import img5 from "../../../images/uber.png";
const AboutTop = () => {
    return (
        <>
            <div className="feature__top about__top">
                <div className="container">
                    <div className="feature__top__wrapper">
                        <div className="header__top">
                            <h1>
                                Rosetta is on a mission to ensure all knowledge
                                survives forever
                            </h1>
                            <p>
                                The goal of Rosetta is to build the world’s most
                                compelling digital publishing network, whilst
                                ensuring the scientfic method survives forever
                                on a persistent distributed protocol.
                            </p>
                        </div>
                        <div className="bottom__text__wrapper">
                            <p>
                                Machine readable validated papers to stop the
                                stem of misinformation
                            </p>
                            <p>
                                Incentivising replication to ensure
                                falsification can occur throughout time
                            </p>
                            <p>
                                No more academic fraud because it now has a real
                                cost associated with it
                            </p>
                            <p>The source of truth for science.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container about__middle">
                <p>Working at Rosetta</p>
                <p>
                    At Rosetta, we're solving the world's most important
                    problems with talented individuals who share our passion to
                    change the world. Our culture is fast-paced, energetic and
                    innovative. We're a distributed team from day one. We work
                    to build an inclusive environment in which everyone,
                    regardless of gender, race, religion, age, or background,
                    can do their best work. We're a team with a variety of
                    backgrounds that have worked at some of the fastest growing
                    technology companies, PhD’s, and more.
                </p>
                <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
                <p>
                    Get in touch with us for new roles because we're always
                    hiring.
                </p>
                <p>careers@openrosetta.org</p>
            </div>
        </>
    );
};

export default AboutTop;
