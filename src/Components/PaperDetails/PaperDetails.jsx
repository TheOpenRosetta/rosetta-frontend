import React from "react";
import PaperHeader from "../PaperDetails/PaperHeader/PaperHeader";
import PaperBody from "../PaperDetails/PaperBody/PaperBody";
import Nav from "../Nav/Nav";

const PaperDetails = () => {
    return (
        <div>
            <Nav show={true} />
            <PaperHeader />
            <PaperBody />
        </div>
    );
};

export default PaperDetails;
