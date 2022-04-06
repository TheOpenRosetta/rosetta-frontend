import React from "react";
import Nav from "../Components/Nav/Nav.jsx";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Careers = () => {
  return (
    <main>
      <Nav></Nav>
      <div className="careers">
        <div className="careers__intro">
          <div className="container">
            <h1 className="careers__title">Careers</h1>
            <div className="careers__text">
              At Rosetta, we're solving the world's most important problems with
              talented individuals who share our passion to change the world.
              Our culture is fast-paced, energetic and innovative. We're a
              distributed team from day one. We work to build an inclusive
              environment in which everyone, regardless of gender, race,
              religion, age, or background, can do their best work. We're a team
              with a variety of backgrounds that have worked at some of the
              fastest growing technology companies, PhD’s, and more.
            </div>
          </div>
        </div>
        <div className="careers__vacancies">
          <div className="container">
            <div className="careers__vacancies-title">
              Currently we're looking for the next specialists:
            </div>
            <div className="careers__vacancies-list">
              <div className="careers__vacancies-item">
                <Link
                  to="/careers/growth_lead"
                  className="careers__vacancies-link"
                >
                  <img
                    src="/icons/trending.svg"
                    alt="Growth Lead icon"
                    className="careers__vacancies-item-img"
                  />
                  <span className="careers__vacancies-item-text">
                    Growth Lead
                  </span>
                </Link>
              </div>
              <div className="careers__vacancies-item">
                <Link
                  to="/careers/full_stack-smart_contract_engineer"
                  className="careers__vacancies-link"
                >
                  <img
                    src="/icons/code.svg"
                    alt="Full Stack Smart Contract Engineer icon"
                    className="careers__vacancies-item-img"
                  />
                  <span className="careers__vacancies-item-text">
                    Full Stack Smart Contract Engineer
                  </span>
                </Link>
              </div>
              <div className="careers__vacancies-item">
                <Link
                  to="/careers/product_lead"
                  className="careers__vacancies-link"
                >
                  <img
                    src="/icons/chart.svg"
                    alt="Product lead icon"
                    className="careers__vacancies-item-img"
                  />
                  <span className="careers__vacancies-item-text">
                    Product Lead
                  </span>
                </Link>
              </div>
              <div className="careers__vacancies-item">
                <Link
                  to="/careers/head_of_open_science"
                  className="careers__vacancies-link"
                >
                  <img
                    src="/icons/unlock.svg"
                    alt="Head of Open Science icon"
                    className="careers__vacancies-item-img"
                  />
                  <span className="careers__vacancies-item-text">
                    Head of Open Science
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Careers;
