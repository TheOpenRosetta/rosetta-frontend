import React from "react";
import FAQ from "../About/FAQ/FAQ";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const FAQPage = () => {
    return (
        <div>
            <Nav></Nav>
            <section className="developers__section">
                <div className="developers__wrapper">
                    <h2>Frequently asked questions</h2>
                    <p>
                        If you any others questions that you haven’t found here
                        reach us out.
                    </p>
                    <button>Contact Us</button>
                </div>
            </section>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default FAQPage;
