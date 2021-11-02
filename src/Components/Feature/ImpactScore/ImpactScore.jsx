import React from "react";

const ImpactScore = () => {
    return (
        <div className="impactScore">
            <div className="container">
                <div>
                    <h2>ImpactScore</h2>
                    <p>
                        Rosetta’s powerful impact measurement mechansim to
                        determines the quality of papers is used to distribute
                        rewards to papers. Every paper in the network gets a
                        score. From the distribution to each paper, 80% of each
                        blocks reward goes to the owners of papers, and 20% gets
                        distributed into reward pools. The reward pools are used
                        to incentivse replication, falsification, fraud,
                        mistakes, and critical discussions. This ensures the
                        objective function of the network, which is to maximise
                        the supply of quality, truthful knowledge.
                    </p>
                </div>
                <div>
                    <p>
                        I(b) = <span>&Sigma;</span>(I(a) + T(a) X D(a)) x d x
                        wa,b
                    </p>
                    <p>
                        Where A is the set of all articles on the Rosetta
                        network, d is a real number,wa,b is the weight which
                        peper a gives to paper b, T(a) is the trust the network
                        assigns to paper a, and I(a) , is paper a ‘s impact
                        score, and D(a) = where age is the age in years of the
                        paper a and c is the citation decay rate.
                    </p>
                    <p>
                        Any information medium is now able to be cited, and
                        recieve a fair weighting. Such as: codesets,
                        visualisations, videos, blogposts, and more.
                    </p>
                </div>
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

export default ImpactScore;

const contents = [
    {
        title: "No more rank order",

        text: "When publishing authors assign percentage weights to every co-author to distribute rewards for that paper fairly.",
    },
    {
        title: "No static citations",

        text: "Authors assign the percentage of influence a citation had on the work. This unlocks the ability to fairly measure new information mediums such as codesets, blogs, videos, etc. ",
    },
    {
        title: "Falisification across time",

        text: "Rewards are released on a continuous clock cycle. This means that rewards will always accrue to quality papers to ensure falsification, and replication is attempted throughout time on humanities collective knowledge.",
    },
];
