import React, { useState } from "react";
import { Link } from "react-router-dom";
import search from "../../images/search-normal.svg";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
const Landing = () => {
    const [result, setResult] = useState({
        data: [],
        loading: false,
    });
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    const [name, setName] = useState("");

    const handleForm = (e) => {
        const temp = { ...result };
        temp.loading = true;
        setResult(temp);
        if (name) {
            fetch(
                `https://rosetta.eastus.cloudapp.azure.com/api/getauthors/${name}`
            )
                .then((response) => response.json())
                .then((Data) =>
                    setResult({
                        data: Data,
                        loading: false,
                    })
                );
        } else {
            setResult({
                data: [],
                loading: false,
            });
        }

        e.preventDefault();
    };

    const handleChange = (e) => {
        if (e.target.value) {
            setName(e.target.value);
        } else {
            setResult({
                data: [],
                loading: false,
            });
        }
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
                <div className="search__box">
                    <form onSubmit={handleForm}>
                        <img src={search} alt="" />
                        <input
                            type="text"
                            onChange={(e) => handleChange(e)}
                            placeholder="Search for researcher and papers "
                        />
                        {!result.loading && (
                            <button type="submit" disabled={result.loading}>
                                Search
                            </button>
                        )}
                        <PuffLoader
                            color={"#b68e5c"}
                            loading={result.loading}
                            css={override}
                            size={40}
                        />
                    </form>
                    {result.data.length !== 0 && (
                        <div className="search__result">
                            {result.data.map((x) => (
                                <Link to={`/profile/${x.normalizedName}`}>
                                    <div>
                                        <div></div>
                                        <div>
                                            <p>{x.displayName}</p>
                                            <small>
                                                Total Paper: {x.paperCount}
                                            </small>
                                        </div>
                                        <Link
                                            to={`/profile/${x.normalizedName}`}
                                        >
                                            Profile
                                        </Link>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
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
