import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Overview from "../Overview/Overview";
import Papers from "../Papers/Papers";
import SideBar from "../SideBar/SideBar";

const ProfileBody = () => {
    const { name } = useParams();
    const [active, setActive] = useState(1);
    const [info, setInfo] = useState("");
    useEffect(() => {
        fetch(
            `https://rosetta.eastus.cloudapp.azure.com/api/getauthors/${name}`
        )
            .then((response) => response.json())
            .then((data) => setInfo(data[0]));
    }, [name]);
    return (
        <section className="profileBody">
            <div className="container">
                <SideBar info={info}></SideBar>
                {active === 1 ? (
                    <Overview setActive={setActive} info={info}></Overview>
                ) : (
                    <Papers setActive={setActive} info={info}></Papers>
                )}
            </div>
        </section>
    );
};

export default ProfileBody;
