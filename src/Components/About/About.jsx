import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import AboutTop from "./AboutTop/AboutTop";
import FAQ from "./FAQ/FAQ";

const About = () => {
    return (
        <section className="about">
            <Nav></Nav>
            <AboutTop></AboutTop>
            <FAQ></FAQ>
            <Footer></Footer>
        </section>
    );
};

export default About;
