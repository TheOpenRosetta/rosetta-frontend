import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../StateManagement/AuthorsContext";
import Overview from "../Overview/Overview";
import Papers from "../Papers/Papers";
import MoonLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/react";
import ProfileTop from "../ProfileTop/ProfileTop";
const ProfileBody = () => {
    const { id, name } = useParams();
    const [active, setActive] = useState(1);
    const [info, setInfo] = useState("");
    const [authors] = useContext(DataContext);
    useEffect(() => {
        if (authors.length !== 0) {
            const author = authors.find((x) => x.authorId === id);
            setInfo(author);
        } else {
            fetch(
                `https://rosetta.eastus.cloudapp.azure.com/api/getauthors/${name}`
            )
                .then((response) => response.json())
                .then((data) => setInfo(data[0]));
        }
    }, [id, name]);
    // console.log(info);
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    console.log(authors);
    return (
        <section className="profileBody">
            {info ? (
                <div>
                    <ProfileTop info={info}></ProfileTop>
                    {active === 1 ? (
                        <Overview setActive={setActive} info={info}></Overview>
                    ) : (
                        <Papers setActive={setActive} info={info}></Papers>
                    )}
                </div>
            ) : (
                <div className="data__loader">
                    <MoonLoader
                        color={"#b68e5c"}
                        loading={true}
                        css={override}
                        size={10}
                    />
                </div>
            )}
        </section>
    );
};

export default ProfileBody;
