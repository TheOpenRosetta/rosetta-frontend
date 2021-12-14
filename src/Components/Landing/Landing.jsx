import React from "react";
import Particle from "../Particle/Particle";
import img1 from "../../images/open access.png";
import img2 from "../../images/open source.png";
import img3 from "../../images/non profit.png";
import { useHistory } from "react-router-dom";

const Landing = () => {
    let history = useHistory();
    return (
        <>
          <section className="hero">
              <Particle></Particle>
              <div className="container">
                  <p>Introducing Rosetta:</p>
                  <h1>
                      The new scientist owned collaborative network with open markets for knowledge for any scientist to own, and earn.
                  </h1>
                  <p>
                      Now the average paper published earns the author $1,000 a year in ownership rewards, and gets archived permenantly on the most powerful persistent repository to ensure your knowledge can never be destroyed.
                  </p>
                  <div className="two__btn">
                      <button className="btn btn__primary" onClick={() => history.push("/start/")}>
                          Get Early Access
                      </button>
                  </div>
                  <div className="three__img">
                      <img src={img1} alt="illustration 1" />
                      <img src={img3} alt="illustration 2" />
                      <img src={img2} alt="illustration 3" />
                  </div>
              </div>
              <div className="graph__stats">
                  <div className="graph__stats__body">
                      <span>
                          {" "}
                          Our
                          <br /> Knowledge
                          <br /> Graph Stats{" "}
                      </span>
                      <br />
                      <div>
                          <h5> 271m+ </h5>
                          <span> Authors </span>
                      </div>
                      <div>
                          <h5> 136m+ </h5>
                          <span> Papers </span>
                      </div>
                      <div>
                          <h5> 1.8bn+ </h5>
                          <span> Citations </span>
                      </div>
                  </div>
              </div>
          </section>
          <section className="landing__description">
            <div className="container">
              <div className="description">
                <div className="description__title">The most powerful social platform for discovery, and distribution.</div>
                <div className="description__text">
                  <p>Now you can earn by publishing open access replicable quality papers for free.</p>
                  <p>When you publish on Rosetta’s open access permissionless persistent repository, you create a market for your paper that you own, and earn the rewards based on it’s Impact.</p>
                </div>
                <div className="description__btn">
                  <button className="btn" onClick={() => history.push("/features/")}>
                      Learn more
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="landing__ownership">
            <div className="container">
              <div className="ownership__text">
                Over <span>271+ Million</span> authors can now see how much ownership, and extra income you can claim from your past papers in under 2 minutes.
              </div>
              <div className="ownership__logos">
                <img src={img1} alt="illustration 1" />
                <img src={img3} alt="illustration 2" />
                <img src={img2} alt="illustration 3" />
              </div>
            </div>
          </section>
        </>
    );
};

export default Landing;
