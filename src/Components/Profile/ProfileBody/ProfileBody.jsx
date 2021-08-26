import React, { useState } from "react";
import Overview from "../Overview/Overview";
import Papers from "../Papers/Papers";
import SideBar from "../SideBar/SideBar";

const ProfileBody = () => {
    const [active, setActive] = useState(1);
    return (
        <section className="profileBody">
            <div className="container">
                <SideBar></SideBar>
                {active === 1 ? <Overview></Overview> : <Papers></Papers>}
            </div>
        </section>
    );
};

export default ProfileBody;
