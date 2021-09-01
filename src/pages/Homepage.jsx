import React from "react";
import Feature from "../Components/Feature/Feature.jsx";
import Landing from "../Components/Landing/Landing.jsx";
import Nav from "../Components/Nav/Nav.jsx";
import Programmable from "../Components/Programmable/Programmable.jsx";
import Paper from "../Components/ResearchPaper/Paper.jsx";
import Works from "../Components/Works/Works.jsx";
import Footer from "../Components/Footer/Footer";
import Discovery from "../Components/Discovery/Discovery.jsx";
const Homepage = () => {
    return (
        <main>
            <Nav></Nav>
            <Landing></Landing>
            {/* <Paper></Paper>
            <Feature></Feature>
            <Works></Works>
            <Programmable></Programmable>
            <Discovery></Discovery>
            <Footer /> */}
        </main>
    );
};

export default Homepage;
