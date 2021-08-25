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
                    finally own the rewards from their work, get discovered, and
                    stay in the loop. Just by publishing open access for free in
                    a way that can be reproduced, and proven truthful. A network
                    of validators scan papers for academic fraud, mistakes, and
                    attempt to falsify papers to win rewards.
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
                        rewards of their work. Rewards get distributed via a
                        novel incentive mechanism called ImpactScore.
                    </p>
                </div>
                {/* grid 2 */}
                <div className="feature__grid">
                    {/* col-1 */}
                    <div>
                        <div>
                            <span>
                                <img src={ring} alt="" />
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
                                <img src={ring} alt="" />
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
                                <img src={ring} alt="" />
                                BYE BYE, REPLICATION CRISIS
                            </span>
                            <p>
                                A network of reputable peers compete to
                                replicate research over time to earn rewards
                                that ensures falsification occurs on our
                                collective knowledge.{" "}
                            </p>
                        </div>
                        <button>Read the rosetta whitepaper</button>
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
