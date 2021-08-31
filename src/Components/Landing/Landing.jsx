import React from "react";
import search from "../../images/search-normal.svg";
const Landing = () => {
    const handleForm = (e) => {
        e.preventDefault();
    };
    return (
        <section className="hero">
            <div className="container">
                <p>Introducing Rosetta</p>
                <h1>The new protocol for truthful open science</h1>
                <p>
                    The new decentralised global P2P platform co-operative
                    social network where authors finally own the rewards, and
                    democratically manage the knowledge commons, together.
                </p>
                <form onSubmit={(e) => handleForm(e)}>
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
