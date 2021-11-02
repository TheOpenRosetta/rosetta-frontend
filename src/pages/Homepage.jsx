import React from "react";
import Landing from "../Components/Landing/Landing.jsx";
import Nav from "../Components/Nav/Nav.jsx";
import Footer from "../Components/Footer/Footer";
const Homepage = () => {
    return (
        <main>
            <Nav></Nav>
            <Landing></Landing>
            <Footer />
        </main>
    );
};

export default Homepage;
