import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Spread = () => {
    return (
        <>
            <Nav></Nav>
            <section className="developers__section spread">
                <div className="developers__wrapper">
                    <h2>
                        Friends don't let friends not earn, and own part of the
                        knowledge commons.
                    </h2>
                    <p>
                        We're setting the new standard of publishing online.
                        Free to publish open access. Earn for quality replicable
                        knowledge.
                    </p>
                </div>
                <div className="spread__body container">
                    <p>
                        Here's some talking points to help tell your friends
                        about Rosetta.{" "}
                    </p>
                    <div>
                        {contents.map((content, index) => (
                            <div key={index}>
                                <p>{content.title}</p>
                                <p>{content.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Spread;

const contents = [
    {
        title: "Ensure your knowledge survives forever.",

        text: "All knowledge published on Rosetta lives on a distributed persistent network called Arweave. It replicates files across thousands of machines around the world, and has a novel endowment structure to allow files to persist to infinity.",
    },
    {
        title: "Owned by authors. Governed by a non-profit foundation.",

        text: "Authors earn by publishing quality replicable research, and doing work to validate the papers quality. This lets authors earn, own, and democratically manage the open network. Invest into any quality paper to share the upside with authors.",
    },
    {
        title: "Open everything",

        text: "Everything is radically open. From our algorithms, to APIs, through to all information. Nothing is behind closed doors as we build open infrastructure for the knowledge commons.",
    },
    {
        title: "Publish open access for free.",

        text: "Stop getting ripped off by annoying 'open access' publishers that make you pay. We pass on a small permanent storage fee at cost because all knowledge should survive forever.  ",
    },
    {
        title: "Incentivising Replicable Research",

        text: "Only replicable research earns rewards. It’s time to finally realign the incentives to the scientific method.",
    },
    {
        title: "Earn rewards for validating work",

        text: "Finally, earn rewards for the work you do to replicate, falsify, and critically reviewing others work. ",
    },
];
