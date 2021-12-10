import React from "react";

const FeatureTop = () => {
    return (
        <div className="feature__top">
            <div className="container">
                <div className="feature__top__wrapper">
                    <div className="header__top">
                        <h1>The future of academia </h1>
                        <p>
                            The most powerful open collaboration platform for discovery, publishing, distribution, funding (coming soon), and the new ability for authors to earn through impact on open markets -- all in the one place. Built for the digital age. All papers are archived on Arweave for guaranteed persistence through time because your knowledge deserves to live forever.
                        </p>
                    </div>
                    <div className="bottom__text__wrapper">
                        <div className="bottom__text__wrapper-col">
                          <div className="bottom__text__wrapper-col-title">1.</div>
                          <p className="bottom__text__wrapper-col-text">Academics instantly publish a paper for free to Rosetta’s open permissionless archive. Each published paper receives a unique knowledge token that receives supply of the base Rosetta token every block reward measured by the quality of the work.</p>
                        </div>
                        <div className="bottom__text__wrapper-col">
                          <div className="bottom__text__wrapper-col-title">2.</div>
                          <p className="bottom__text__wrapper-col-text">Over time, the rewards flow to the owners of the knowledge token, which can itself be traded in Rosetta’s open markets.</p>
                        </div>
                        <div className="bottom__text__wrapper-col">
                          <div className="bottom__text__wrapper-col-title">3.</div>
                          <p className="bottom__text__wrapper-col-text">The crowd buys in early in anticipation of quality citations, and thus a larger flow of rewards to the paper that unlocks novel quality & truth signals before citations accrue.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureTop;
