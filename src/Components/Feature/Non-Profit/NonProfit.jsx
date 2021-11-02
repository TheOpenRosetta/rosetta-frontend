import React from "react";

const NonProfit = () => {
    return (
        <div className="nonProfit">
            <div className="container">
                <p>Stewarded by a non-profit</p>
                <p>
                    An independant group focused on building the future open
                    infrastructure for the knowledge commons.
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

export default NonProfit;

const contents = [
    {
        title: "Owned by the community of authors",

        text: "Authors earn ownership for contributing quality to the knowledge commons.",
    },
    {
        title: "Radical Openness",

        text: "Everything is open from our algorithms, data, knowledge graph, and more. ",
    },
    {
        title: "Built to last, forever. ",

        text: "We built on top of Arweave, which is a persistent distributed network. This means that whenver you submit a paper to Rosetta it will survive forever, guaranteed. No more burning of books, or knowledge.",
    },
    {
        title: "Committed to open access",
        text: "Every paper is open by default, and replicable. We baked in the scientific method via incentives to our protocol to ensure it can never be erased. ",
    },
    {
        title: "Source of Truth for Science",
        text: "Because every paper is machine readable, and incentivised for validation we hope to help stop the stem of online misinformation. ",
    },
];
