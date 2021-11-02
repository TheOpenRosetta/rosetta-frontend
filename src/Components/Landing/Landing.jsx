import React from "react";

// import search from "../../images/search-normal.svg";
// import { css } from "@emotion/react";
// import PuffLoader from "react-spinners/PuffLoader";
import Particle from "../Particle/Particle";
// import { DataContext } from "../../StateManagement/AuthorsContext";
import img1 from "../../images/open access.png";
import img2 from "../../images/open source.png";
import img3 from "../../images/non profit.png";
import { Link, useHistory } from "react-router-dom";
const Landing = () => {
    let history = useHistory();
    // const [result, setResult] = useState({
    //     data: [],
    //     loading: false,
    // });
    // const override = css`
    //     display: block;
    //     margin: 0 auto;
    //     border-color: red;
    // `;
    // const [name, setName] = useState("");
    // const [authors, setAuthors] = useContext(DataContext);

    // const handleForm = (e) => {
    //     const temp = { ...result };
    //     temp.loading = true;
    //     setResult(temp);
    //     if (name) {
    //         fetch(
    //             `https://rosetta.eastus.cloudapp.azure.com/api/getauthors/${name}`
    //         )
    //             .then((response) => response.json())
    //             .then((Data) =>
    //                 setResult({
    //                     data: Data,
    //                     loading: false,
    //                 })
    //             );
    //     } else {
    //         setResult({
    //             data: [],
    //             loading: false,
    //         });
    //     }
    //     e.preventDefault();
    // };
    // const handleChange = (e) => {
    //     if (e.target.value) {
    //         setName(e.target.value);
    //     } else {
    //         setResult({
    //             data: [],
    //             loading: false,
    //         });
    //     }
    // };
    // useEffect(() => {
    //     setAuthors(result.data);
    // }, [result]);
    return (
        <section className="hero">
            <Particle></Particle>
            <div className="container">
                <p>Introducing Rosetta</p>
                <h1>
                    The new peer-to-peer social publishing network owned by
                    authors
                </h1>
                <p>
                    <span>
                        Join the open access publishing movement on a fully open
                        source social network where authors now earn ownership
                        in the network by contributing to the knowledge commons.
                    </span>{" "}
                    The average paper published earns the author $1,000 a year
                    in ownership rewards on our network based on its
                    ImpactScore, and recieves 70% more citations over it’s
                    lifetime by publishing open access.
                </p>
                {/* <div className="search__box">
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
                            {result.data.map((x, index) => (
                                <Link
                                    to={`/profile/${x.authorId}/${x.normalizedName}/`}
                                    key={index}
                                >
                                    <div>
                                        <div></div>
                                        <div>
                                            <p>{x.displayName}</p>
                                            <small>
                                                Total Paper: {x.paperCount}
                                            </small>
                                        </div>
                                        <Link
                                            to={`/profile/${x.authorId}/${x.normalizedName}/`}
                                        >
                                            Profile
                                        </Link>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div> */}
                <div className="two__btn">
                    <button onClick={() => history.push("/start/")}>
                        Get Early Access
                    </button>
                    <button onClick={() => history.push("/features/")}>
                        Learn more
                    </button>
                </div>
                <p>
                    Over <span>271+ Million </span> authors can now see how much
                    ownership, and extra income you can claim from your past
                    papers in under 2 minutes.
                </p>
                <div className="three__img">
                    <img src={img1} alt="" />
                    <img src={img3} alt="" />
                    <img src={img2} alt="" />
                </div>
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
