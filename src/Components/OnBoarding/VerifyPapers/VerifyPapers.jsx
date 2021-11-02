import React, { useEffect, useState } from "react";
import girl from "../../../images/girl-smile.png";
import profile from "../../../images/profileImg.png";
import Pagination from "../../Pagination/Pagination";
import MoonLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/react";
const VerifyPapers = ({ user, setStep }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const override = css`
        display: block;
        margin: 0 auto;
    `;
    let lastIndex = currentPage * 3;
    let firstIndex = lastIndex - 3;
    const [result, setResult] = useState({
        data: [],
        loading: false,
    });
    useEffect(() => {
        if (user) {
            const temp = { ...result };
            temp.loading = true;
            setResult(temp);
            fetch(
                `https://rosetta.eastus.cloudapp.azure.com/api/getauthorpapers/${user.authorId}`
            )
                .then((response) => response.json())
                .then((Data) =>
                    setResult({
                        data: Data,
                        loading: false,
                    })
                );
        }
    }, [user]);
    return (
        <div className="onBoarding verifyPapers">
            <div className="onBoarding__left">
                <img src={girl} alt="" />
            </div>
            <div className="onBoarding__right">
                <div>
                    <div className="verifyPapers__right__top">
                        <p>Verify your papers</p>
                        <img src={profile} alt="" />
                        <p>Anthony Ryan</p>
                        <p>ImpactScore: 10000</p>
                    </div>
                </div>
                {!result.loading ? (
                    <div>
                        {result.data
                            .slice(firstIndex, lastIndex)
                            .map((x, index) => (
                                <div className="verifyPapers__content">
                                    <div className="verifyPapers__content__info">
                                        <p>
                                            ImpactScore: <span>{x.rank}</span>
                                        </p>
                                        <p>{x.paperTitle}</p>
                                        <p>
                                            Paola Peynetti Velázquez, G. Gupta,{" "}
                                            {x.date.substring(0, 10)}
                                        </p>
                                    </div>
                                    <div className="verifyPapers__content__button">
                                        <button>I am the author</button>
                                        {/* <div>x</div> */}
                                    </div>
                                </div>
                            ))}
                        <div className="pagination">
                            <div>
                                <Pagination
                                    total_number={result?.data.length}
                                    per_page={3}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                ></Pagination>
                            </div>
                        </div>
                        <div className="get__started__btn">
                            <button onClick={() => setStep(2)}>Back</button>
                            <button className="get__started__btn">
                                Get started
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="loader">
                        <MoonLoader
                            color={"#b68e5c"}
                            loading={true}
                            css={override}
                            size={10}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
export default VerifyPapers;
