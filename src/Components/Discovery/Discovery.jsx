import React from "react";
import paper from "../../images/paper-group.png";
import tick from "../../images/tick.svg";
const Discovery = () => {
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
            </div>
        </section>
    );
};

export default Discovery;
