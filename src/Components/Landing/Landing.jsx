import React from "react";
import search from "../../images/search-normal.svg";
const Landing = () => {
    return (
        <section className="hero">
            <div className="container">
                <p>Introducing Rosetta</p>
                <h1>The open source protocol for truthful science</h1>
                <p>
                    Finally, publish open access with all your research outputs,
                    and get rewarded on the new p2p social network.{" "}
                </p>
                <form>
                    <img src={search} alt="" />
                    <input
                        type="text"
                        placeholder="Search for researcher and papers "
                    />
                    <button type="submit">Search</button>
                </form>
                <small>
                    Over 271+ Million Authors profiles & rewards ready to be
                    claimed on our network
                </small>
            </div>
        </section>
    );
};

export default Landing;
