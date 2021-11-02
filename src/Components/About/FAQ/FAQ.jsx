import React from "react";
import SimpleExpansionPanel from "./SimpleExpansionPanel";

const FAQ = () => {
    return (
        <section className="faq__wrapper" id="faq">
            <div className="container">
                <p>Frequently asked </p>
                <p>questions</p>
            </div>
            <div className="container">
                {contents.map((content, index) => (
                    <SimpleExpansionPanel
                        key={index}
                        title={content.title}
                        text={content.text}
                    ></SimpleExpansionPanel>
                ))}
            </div>
        </section>
    );
};

export default FAQ;

const contents = [
    {
        title: "Why are there tokens?",
        text: "Tokens are used to create incentives towards the objective function of the network, which is to maximise the supply of quality, truthful knowledge. They unlock the ability to allow authors to get paid for doing work in a model that works for everyone. ",
    },
    {
        title: "How do you maintain quality?",
        text: "Open markets are the best mechansim to create fair measurements of quality using traditional market forces. Unlike traditional methods it allows everyone to have a voice instead of a few editors. Open markets are the best mechansim to create fair measurements of quality using traditional market forces. Unlike traditional methods it allows everyone to have a voice instead of a few editors. ",
    },
    {
        title: "How is it free to publish?",
        text: "We’re a non-profit. It’s built by authors for authors. The cost to store information forever is the only cost, which we will eventually have to pass on once we reach a certain size. ",
    },
    {
        title: "Why publish everything?",
        text: "In the past a few editors decide what gets seen. Everyone deserves the opportunity to be an author. Quality will rise to the top. Junk will be forgotten. ",
    },
    {
        title: "How do you handle validating the volume if everything is accepted?",
        text: "Everything is distributed. Any peer that has the ability to replicate the work is able to, and earn rewards. They put up their reputation, and an amount of money, which we call a stake. If they don’t do it properly they lose their money, and reputation. ",
    },
    {
        title: "Why hasn’t this been done before?",
        text: "Today the cost of validating papers is time consuming with a small amount of editors. By opening up to a distributed set of validators, and ensuring they have public reputation, and monetary skin in the game we unlock the ability to have a platform to check papers. ",
    },
    {
        title: "What about other journals?",
        text: "We’ve built the best publsihing tool that does the hard work for you to publish in other journals. In the future you won’t, but we understand if you want too in the beginning.",
    },
    {
        title: "How is this different to other social media networks?",
        text: "Firstly, none are author owned. It’s entirely owned by the founders, and shareholders. You’re on their property. They have to optimise for profit. We optimise for the number of quality, truthful papers. Secondly, we’ve built the entire network around preserving the scientific method from the ground-up. Every incentive is optimised to ensure that science can survive, no matter what happens in the world. ",
    },
    {
        title: "How can I govern the network?",
        text: "When there are proposals everyone that is an owner of the network through holding Rosetta tokens is able to vote on the proposal. ",
    },
    {
        title: "How can I share feedback?",
        text: "We welcome all comments, and discussions about the project. Reach us at hello@openrosetta.org ",
    },
];
