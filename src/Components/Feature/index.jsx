import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
// import AuthorControl from "./AuthorsControl/AuthorControl";
// import DigitalPublishing from "./DigitalPublishing/DigitalPublishing";
// import Discover from "./Discover/Discover";
import FeatureTop from "./FeatureTop/FeatureTop";
// import GordianMarket from "./GordianMarket/GordianMarket";
import ImpactScore from "./ImpactScore/ImpactScore";
import MarketPaper from "./MarketPaper/MarketPaper";
import NonProfit from "./Non-Profit/NonProfit";
import ReviewWork from "./ReviewWorks/ReviewWork";

const Feature = () => {
    return (
        <div>
            <Nav />
            <FeatureTop />
            {
              // <AuthorControl />
            }
            <ImpactScore />
            <ReviewWork />
            <MarketPaper />
            {
              // <DigitalPublishing />
            }
            {
              // <Discover></Discover>
            }
            {
              // <GordianMarket />
            }
            <NonProfit />
            <Footer></Footer>
        </div>
    );
};

export default Feature;
