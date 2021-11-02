import React from "react";
import fraud from "../../images/fraud 1.svg";
import premium from "../../images/premium 1.svg";
import ring from "../../images/ring-icon.svg";
import paper from "../../images/paper-group.png";
const Feature = () => {
    return (
        <section className="feature">
            <div className="container">
                <p>
                    is a new innovative P2P social network that lets any author
                    finally own the rewards, and democratically manage societies
                    knowledge commons, together. Earn rewards by publishing open
                    access quality knowledge for free in a way that can be
                    reproduced, and proven truthful. A network of reputable
                    peers, called validators scan all papers for academic fraud,
                    mistakes, and attempt to falsify all papers to win, and earn
                    rewards.
                </p>
            </div>
            <div className="container feature__bottom">
                <div>
                    <p>The Rosetta Protocol</p>
                    <p>
                        It’s not was it ‘peer reviewed’, but does it
                        ‘replicate’.
                    </p>
                    <p>
                        Rosetta is a novel p2p network that lets authors own the
                        rewards of their work via a novel incentive mechanism
                        called ImpactScore. It is 100% community owned,
                        operated, and democratically governed to give back
                        control to authors.
                    </p>
                </div>
                {/* grid 2 */}
                <div className="feature__grid">
                    {/* col-1 */}
                    <div>
                        <div>
                            <span>
                                <img
                                    src={ring}
                                    alt="BYE BYE, REPLICATION CRISIS"
                                />
                                BYE BYE, REPLICATION CRISIS
                            </span>
                            <p>
                                A network of reputable peers compete to
                                replicate research over time to earn rewards
                                that ensures falsification occurs on our
                                collective knowledge.{" "}
                            </p>
                        </div>
                        <div>
                            <span>
                                <img
                                    src={fraud}
                                    alt="BYE BYE, ACADEMIC FRAUD"
                                />
                                BYE BYE, ACADEMIC FRAUD & MISTAKES
                            </span>
                            <p>
                                Validators scan the network to discover academic
                                fraud, and mistakes. If they find them they earn
                                rewards. All fraud is put before a democratic
                                arbitration process.
                            </p>
                        </div>
                        <div>
                            <span>
                                <img
                                    src={premium}
                                    alt="HELLO, AUTHORS FINALLY EARNING REWARDS"
                                />
                                HELLO, AUTHORS FINALLY EARNING REWARDS
                            </span>
                            <p>
                                Authors earn rewards by publishing replicable
                                quality papers to the knowledge commons. Authors
                                only earn rewards if they publish knowledge with
                                all their research outputs.
                            </p>
                        </div>
                        <button>Learn more</button>
                    </div>
                    {/* col-2 */}
                    <div>
                        <img src={paper} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
