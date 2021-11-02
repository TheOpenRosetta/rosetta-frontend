import React, { useEffect, useState } from "react";
import girl from "../../../images/girl-smile.png";
import Pagination from "../../Pagination/Pagination";
import MoonLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/react";
import { Avatar, Button } from "@mui/material";
import profile from "../../../images/profile_img.svg";
const VerifyIdentity = ({ user, setStep }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dis, setDis] = useState(true);
    const [result, setResult] = useState({
        data: [],
        loading: false,
    });
    const override = css`
        display: block;
        margin: 0 auto;
    `;
    let lastIndex = currentPage * 2;
    let firstIndex = lastIndex - 2;
    useEffect(() => {
        if (user) {
            const temp = { ...result };
            temp.loading = true;
            setResult(temp);
            fetch(
                `https://rosetta.eastus.cloudapp.azure.com/api/getauthorswithname/${
                    user.firstName
                }${" "}${user?.lastName}`
            )
                .then((response) => response.json())
                .then((Data) =>
                    setResult({
                        data: Data,
                        loading: false,
                    })
                );
        } else {
            setStep(1);
        }
    }, [user]);

    return (
        <div className="onBoarding verifyIdentity">
            <div className="onBoarding__left">
                <img src={girl} alt="" />
            </div>
            <div className="onBoarding__right">
                <div>
                    <div className="verifyIdentity__right__top">
                        <p>Verify your identity</p>
                        <p>
                            We found other authors with names similar to yours.
                            Please pick the right one. Fraudulent claims are
                            considered as theft, and will penalised accordingly.
                        </p>
                    </div>
                    {!result.loading ? (
                        <div className="verifyIdentity__right__bottom">
                            <div className="onboarding__authorProfile">
                                {result.data
                                    .slice(firstIndex, lastIndex)
                                    .map((x, index) => (
                                        <AuthorProfile
                                            setDis={setDis}
                                            data={x}
                                            user={user}
                                        ></AuthorProfile>
                                    ))}
                            </div>
                            <div>
                                <Pagination
                                    total_number={result?.data.length}
                                    per_page={2}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                ></Pagination>
                            </div>
                            <div>
                                <Button onClick={() => setStep(1)}>
                                    Go Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setStep(3)}
                                    disabled={dis}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <MoonLoader
                            color={"#b68e5c"}
                            loading={true}
                            css={override}
                            size={10}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default VerifyIdentity;

const AuthorProfile = ({ data, user, setDis }) => {
    const [claim, setClaim] = useState(false);

    const [papers, setPapers] = useState({
        allPaper: [],
        loading: false,
    });
    useEffect(() => {
        fetch(
            `https://rosetta.eastus.cloudapp.azure.com/api/getauthorpapers/${data.authorId}`
        )
            .then((response) => response.json())
            .then((Data) =>
                setPapers({
                    allPaper: Data,
                    loading: false,
                })
            );
    }, [data]);
    useEffect(() => {
        if (user.authorId === data.authorId) {
            setClaim(true);
            setDis(false);
        } else {
            setClaim(false);
            setDis(true);
        }
    }, [data]);
    const handleClaim = (id) => {
        if (user.authorId == null) {
            user.authorId = id;
            sessionStorage.setItem("user", JSON.stringify(user));
            setClaim(true);
            setDis(false);
        } else if (user.authorId && user.authorId === id) {
            user.authorId = null;
            sessionStorage.setItem("user", JSON.stringify(user));
            setClaim(false);
            setDis(true);
        }
    };

    return (
        <div className="authorProfile__card">
            <div>
                <Avatar src={profile} sx={{ width: 56, height: 56 }}></Avatar>
                <div>
                    <div>
                        <div>
                            <p>{data?.displayName}</p>
                            <small>Harvard University </small>
                        </div>
                        {claim ? (
                            <button
                                className="active"
                                onClick={() => handleClaim(data.authorId)}
                            >
                                Claimed
                            </button>
                        ) : (
                            <button onClick={() => handleClaim(data.authorId)}>
                                Claim
                            </button>
                        )}
                    </div>
                    <div>
                        <div>
                            <small>Once off accrued tokens:</small>
                            <p>$50,000 </p>
                        </div>
                        <div>
                            <small>Monthly Ongoing Tokens:</small>
                            <p>$10,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {papers.allPaper.slice(0, 3).map((x, index) => (
                    <div>
                        <small>Impact Score: </small>
                        <span>{x.rank}</span>
                        <p>{x.paperTitle}</p>
                        <div>
                            <small>Paola Peynetti Velázquez, G. Gupta,</small>
                            <small> {x.date.substring(0, 10)}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
