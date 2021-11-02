import React from "react";
import ipad from "../../../images/iPad-Air.svg";

const AuthorControl = () => {
    return (
        <div className="authors__control">
            <div className="container">
                <div className="authors__control__header">
                    <h2>Authors are now back in control</h2>
                    <p>
                        Rosetta is a powerful network designed with game theory
                        for the future of academia. Every new paper published to
                        the network creates a paper token, which gets split
                        between the co-authors based on their contribution,
                        similar to a companies founding shares to give them
                        ownership. Every hour block rewards get distributed to
                        all quality papers in the network. The owners of those
                        paper tokens get the rewards. This unlocks the ability
                        for authors to own, and get rewarded for contributing to
                        the knowledge commons.
                    </p>
                </div>
                <div className="authors__control__wrapper">
                    <div className="authors__control__left">
                        <div className="info">
                            <h2>
                                Authors own, and earn for publishing replicable
                                research.
                            </h2>
                            <p>
                                Authors earn rewards for their ownership in
                                quality papers. If the paper isn’t replicable it
                                isn’t entitled for any rewards. Best of all,
                                publishing is free.{" "}
                            </p>
                        </div>
                        <div className="info">
                            <h2>
                                Authors earn for discovering mistakes, and fraud
                            </h2>
                            <p>
                                To ensure quality, papers have reward pools to
                                be claimed when someone discovers mistakes, and
                                fraud. If an author is caught being fraudulent
                                their public profile is tagged to lose
                                reputation, and their monetary stake they
                                submitted when publishing.
                            </p>
                        </div>
                        <div className="info">
                            <h2>
                                Authors earn for replicating research, and
                                falsifying research
                            </h2>
                            <p>
                                To ensure validity, and truthfulness papers have
                                incentives for authors to replicate them
                                immediately, and add knowledge at the same time.
                            </p>
                        </div>
                    </div>
                    <div className="authors__control__right">
                        <img src={ipad} alt="" width="632px" />
                    </div>
                </div>
                <div className="authors__control__bottom__wrapper">
                    <div className="info">
                        <h2>Authors earn for critical discussions on papers</h2>
                        <p>
                            To incentivize quality critical discussions reward
                            pools are given to authors for critical comments,
                            and discussions.
                        </p>
                    </div>
                    <div className="info">
                        <h2>
                            Authors earn for exchanging ideas, and knowledge
                        </h2>
                        <p>
                            Now authors earn either small co-authorship rewards,
                            or a fixed reward for answering a task based
                            question that an author is stuck on in a
                            collaborative community.
                        </p>
                    </div>
                    <div className="info">
                        <h2>Authors can get sponsorship</h2>
                        <p>
                            Supporters can give sponsorship to authors, and
                            share in the rewards they win. It’s a great way to
                            kickstart your career, and work on your passions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorControl;
