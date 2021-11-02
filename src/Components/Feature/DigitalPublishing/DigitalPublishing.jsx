import React from "react";
import ipad2 from "../../../images/ipad.svg";

const DigitalPublishing = () => {
    return (
        <div className="digital__publishing">
            <div className="container">
                <div className="digital__publishing__header">
                    <h2>Own your new home on the web.</h2>
                    <p>
                        Stop renting space, and giving your work away to others.
                        When you publish open access on Rosetta, you own the
                        rewards, and it’s controlled by the commons.
                    </p>
                </div>
                <div className="digital__publishing__horizontal__wrapper">
                    {firstData.map((item, index) => (
                        <div key={index} className="info">
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="digital__publishing__wrapper">
                    <div className="digital__publishing__left">
                        {secondData.map((item, index) => (
                            <div key={index} className="info">
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="digital__publishing__right">
                        <img src={ipad2} alt="" width="632px" />
                    </div>
                </div>
                <div className="digital__publishing__horizontal__wrapper">
                    {thirdData.map((item, index) => (
                        <div key={index} className="info">
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
const firstData = [
    {
        id: 1,
        title: "Direct Hyperlink Citations",
        text: "Directly link your citations with ease for papers in our 197mm+ knowledge graph.",
    },
    {
        id: 2,
        title: "Collaborate with co-authors in real time ",
        text: "Keep everyone up to date, and assign roles/permissions as you work with our simple WYSIWYG collaborative editor.",
    },
    {
        id: 3,
        title: "Import work from any source",
        text: "Easily import your work from any source: latex, word, markdown, etc.",
    },
];
const secondData = [
    {
        id: 1,
        title: "Publish responsive beautiful work",
        text: "Built to publish to the web for any reading device: mobile, tablet, laptop. No more pdf’s. Machine readable for the information age. ",
    },
    {
        id: 2,
        title: "Embed rich multimedia in your work",
        text: "Now you can import data visualizations, code, formulae, images, videos, and more. ",
    },
    {
        id: 3,
        title: "Rich contextual information",
        text: "Add contextual information on citations when submitting such as whether it was a positive or negative citation, a background, etc. ",
    },
    {
        id: 4,
        title: "Create communities to collaborate",
        text: "Communities can be a single author, a group, a conference, journal, or research group creating their own home on the web that is powered by Rosetta.",
    },
    {
        id: "5",
        title: "Paper Based Metrics",
        text: "Plausibility, originality, scientific & society value on every paper by a distributed set of peers. ",
    },
];
const thirdData = [
    {
        id: 1,
        title: "100% replicable research",
        text: "Authors don’t earn rewards if their research isn’t replicable. This means submitting all research outputs, and processes. Source code, executable docker images, inventory of lab equipment, etc.",
    },
    {
        id: 2,
        title: "Translations",
        text: "Reward pools are given for translating papers to other languages. This unlocks the reach of your paper to millions of people. ",
    },
    {
        id: 3,
        title: "Publish once, publish everywhere.",
        text: "To save you time, and effort publishing everywhere we do the hard work for you by exporting your work exactly how you need it to submit to other journals. ",
    },
];

export default DigitalPublishing;
