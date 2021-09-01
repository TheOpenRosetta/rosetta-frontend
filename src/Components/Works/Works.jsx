import React from "react";
import door from "../../images/door.png";
import house from "../../images/house.png";
import giant from "../../images/giant.png";
const Works = () => {
    return (
        <section className="works container">
            <div>
                <p>How it works </p>
                <p>Now author are back in control</p>
            </div>
            <div className="works__grid">
                {data.map((x) => (
                    <div>
                        <div>
                            <img src={x.img} alt={x.h} />
                        </div>
                        <p>{x.h}</p>
                        <p>{x.p}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;

const data = [
    {
        img: door,
        h: "Publish open access for free",
        p: "Authors earn Rosetta rewards based on the ImpactScore of the paper. This ensures that all authors that produce quality knowledge get rewarded with some of the value that knowledge produces for society. ",
    },
    {
        img: house,
        h: "Open public goods market",
        p: "Every paper has it’s own token, and entitles owners to recieve a portion of Rosetta from every new block reward. This ensures that every author now earns passive income from producing quality knowledge. ",
    },
    {
        img: giant,
        h: "Build on the shoulder of giants, together.",
        p: "The most powerful matching engine as authors now collaborate with anyone, anywhere to produce knowledge. Leave a valuable comment discussion, get rewarded. If you’re stuck, post a question, and have the crowd get rewarded in a small percantage of co-authorship to keep you moving forward, all together. ",
    },
];
