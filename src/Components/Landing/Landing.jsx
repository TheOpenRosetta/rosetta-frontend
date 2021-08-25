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
            <div className="graph__stats">
                <div className="graph__stats__body">
                    <span>
                        {" "}
                        Our
                        <br /> Knowledge
                        <br /> Graph Stats{" "}
                    </span>
                    <br />
                    <div>
                        <h5> 271m+ </h5>
                        <span> Authors </span>
                    </div>
                    <div>
                        <h5> 136m+ </h5>
                        <span> Papers </span>
                    </div>
                    <div>
                        <h5> 1.8bn+ </h5>
                        <span> Citations </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
