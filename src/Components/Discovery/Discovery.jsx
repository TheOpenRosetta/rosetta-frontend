import React from "react";
import tick from "../../images/tick.svg";
const Discovery = () => {
    const Card = [
        {
            id: "1",
            name: "Carl Zimmer",
            text: "Carl wrote a new blog post",
            img: "#",
        },
        {
            id: "2",
            name: "Lex Fridman",
            text: "Lex appeared on a podcast",
            img: "#",
        },
        {
            id: "3",
            name: "Fei-Fei Li",
            text: "Wrote an article in the New York Times",
            img: "#",
        },
    ];

    return (
        <section className="discovery container">
            <div>
                <p>The most powerful discovery platform</p>
                <p>Always stay in the loop</p>
            </div>
            <div className="discovery__grid">
                <div>
                    <p>
                        <img src={tick} alt="Tick" />
                        <span>
                            Contextual alerts when authors are searching topics
                            related to your paper to start discussions
                        </span>
                    </p>
                    <p>
                        <img src={tick} alt="Tick" />
                        <span>
                            Contextual alerts when authors are searching topics
                            related to your paper to start discussions
                        </span>
                    </p>
                    <p>
                        <img src={tick} alt="Tick" />
                        <span>
                            Alerts in your feed from authors you follow all over
                            the web such as blogs, podcasts, and not just
                            academic papers.
                        </span>
                    </p>
                    <p>
                        <img src={tick} alt="Tick" />
                        <span>
                            Get your new powerful homepage to store any file
                            type; conferences, videos, slide decks, and more.
                        </span>
                    </p>
                </div>
                <div>
                    {Card.map((item, index) => {
                        return (
                            <div key={index} data-aos="fade-down">
                                <div>
                                    <span>.</span>
                                </div>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Discovery;
