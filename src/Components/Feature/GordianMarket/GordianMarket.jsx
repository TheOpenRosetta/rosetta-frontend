import React from "react";
import gordian from "../../../images/gordian knot.svg";
const GordianMarket = () => {
    return (
        <div className="gordianMarket">
            <div className="container">
                <p>The new way to control your destiny</p>
                <p>
                    A new marketplace where any research question can be posted,
                    and bounties attached for giving objectively correct
                    research answers. Authors can form collaborative communities
                    to win the bounties, or post their own research project to
                    get funding directly.
                </p>
            </div>
            <div className="container">
                <img src={gordian} alt="" />
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

export default GordianMarket;

const contents = [
    {
        title: "Post, and answer any research question",

        text: "To optimise the funding mechansim in research authors now compete to solve research questions. Funding is directly locked against each question to increase the incentive for authors to solve it.",
    },
    {
        title: "Form communities, and find collaborators for your research project",

        text: "Post a project to the marketplace in search of authors from anywhere to help work on it with you. You can earn rewards together for producing a quality paper that recieves rewards, and earn by unlocking the bounities in the market. ",
    },
    {
        title: "Task based rewards",

        text: "Subgoals for each research question are encouraged to make it easier for authors to earn. Sometimes a team may solve one part of the problem, which they should be rewarded for to move everyone forward together.",
    },
    {
        title: "Build, and fund projects together.",
        text: "As a solo author, or create a team community to raise funds to solve a research question that suits your passion. Share in the bounty rewards with your funders if you win.",
    },
];
