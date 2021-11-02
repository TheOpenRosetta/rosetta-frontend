import React from "react";

const ReviewWork = () => {
    return (
        <div className="reviewWork">
            <div className="container">
                <p>How Review Works</p>
                <p>
                    We’ve built the digital publisher of the future that can
                    handle any volume of papers, whilst giving the most
                    accurate, and fair measure of quality through our
                    distributed network of authors.
                </p>
            </div>
            <div className="container">
                {contents.map((content, index) => (
                    <div key={index}>
                        <p>{content.title}</p>
                        <p>{content.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewWork;

const contents = [
    {
        title: "1. Instant publishing for all papers, for free.",

        text: "All papers are welcome as long as they are replicable, so that the crowd can ensure truthfulness, and validity. No blocking based on percieved trendiness, or importance in the eyes of a few editors.",
    },
    {
        title: "2. Validators replicate to ensure validity.",

        text: "Validators are rewarded for reproducing papers, and adding knowledge to them at the same time. Rewards come from the block reward after citations accrue, and a small amount of the papers token are set aside for replications to ensure it happens as soon as possible after publication. ",
    },
    {
        title: "3. Critical Discussion",

        text: "Every paper has incentives for authors to critically evaluate the paper through open discussions, and comments.",
    },
    {
        title: "4. The wisdom of the crowd",
        text: "Quality is measured via ImpactScore algorithm that accounts for weighted citations through time, as well as an open markets mechanism. Papers that will accrue citations in the future, will have increased yield, thus an incentive for people to bet early before others in anticipation of a rise in price of the paper’s token. ",
    },
];
