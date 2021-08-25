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
        p: "A network of reputable peers compete to replicate research over time to earn rewards that ensures falsification occurs on our collective knowledge. ",
    },
    {
        img: house,
        h: "Open public goods market",
        p: "A network of reputable peers compete to replicate research over time to earn rewards that ensures falsification occurs on our collective knowledge. ",
    },
    {
        img: giant,
        h: "Build on the shoulder of giant",
        p: "A network of reputable peers compete to replicate research over time to earn rewards that ensures falsification occurs on our collective knowledge. ",
    },
];
