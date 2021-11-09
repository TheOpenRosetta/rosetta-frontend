import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Problem from "../../Components/Math/Problem/Problem";

const Math = () => {
    const [show] = useState(false);
    return (
        <div className="math__section">
            <Nav show={() => show(true)} />
            <div className="container">
                <div className="math__wrapper">
                    <h1>Top 10 Papers with issues</h1>
                    <Problem />
                    <Problem />
                    <Problem />
                    <Problem />
                    <Problem />
                    <Problem />
                    <Problem />
                    <Problem />
                    <Problem />
                    <Problem />
                </div>
            </div>
        </div>
    );
};

export default Math;
