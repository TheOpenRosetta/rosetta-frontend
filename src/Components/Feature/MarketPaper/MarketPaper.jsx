import React from "react";
import img from "../../../images/Screen Shot Market paper.png";
const MarketPaper = () => {
    return (
        <div className="marketPrice">
            <div className="container">
                <p>Open Markets for Papers</p>
                <p>
                    The crowd works to discover up and coming papers before
                    citations accrue for novel signals around quality, and
                    truth. The open market mechansim discovers quality papers
                    that rise to the top, and allows anyone to share in the
                    success alongside authors.
                </p>
            </div>
            <div className="container">
                <div>
                    <div>
                        <p>Ownership</p>
                        <p>
                            Authors get ownership tokens for every paper
                            published, and it is divided between co-authors
                            based on their percentage contribution submitted at
                            the time of publiciation. Owners can sell their
                            tokens at any time. Now the crowd is incentivised to
                            get in early, and find quality papers before
                            citations accrue in anticipation of more rewards as
                            the ImpactScore grows.
                        </p>
                    </div>
                    <div>
                        <p>Passive Income </p>
                        <p>
                            Every paper has yield associated with it based on
                            it’s quality from the ImpactScore. Owners recieve
                            ongoing rewards to help fund their passison projects
                            based on their contribution to the knowledge
                            commons.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                    {/* <div>
                        <p>Arweave: Yellow Paper</p>
                        <p>
                            $1984 <span>(+7.00%)</span> APY 7.5%{" "}
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default MarketPaper;
