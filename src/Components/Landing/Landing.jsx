import React from "react";
import HowItWorks from "../HowItWorks";
import harvardLogo from "../../images/logos/harvard.svg";
import mitLogo from "../../images/logos/mit.png";
import nusLogo from "../../images/logos/nus.png";
import openaiLogo from "../../images/logos/openai.png";
import oxfordLogo from "../../images/logos/oxweb.svg";
import stanfordLogo from "../../images/logos/stanford.png";

import demo from "../../images/demo.png";
import { useHistory } from "react-router-dom";

import why1 from "../../images/why/1.png";
import why2 from "../../images/why/2.png";
// import why3 from "../../images/why/3.png";
import why4 from "../../images/why/4.png";
import why5 from "../../images/why/5.png";
import why6 from "../../images/why/6.png";


const Landing = () => {
    let history = useHistory();
    return (
        <>
          <section className="hero">
              <div className="container">
                  <div className="hero__row">
                    <div className="hero__benefits">
                      <div className="hero__title">There’s now a better way to publish pre-prints open access for free</div>
                      <div className="hero__text">Earn rewards worth real money through open markets for knowledge. Instant free open access publishing with zero gatekeepers. Permanent archiving. Zero rank order. Weighted citations. Incentivised replication for falsification through time.</div>
                      <button className="btn btn__primary" onClick={() => history.push("/start/")}>
                          Get Early Access
                      </button>
                    </div>
                    <div className="hero__image">
                      <img src={demo} alt="Demo" />
                    </div>
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
          {
            // <section className="landing__description">
            //   <div className="container">
            //     <div className="description">
            //       <div className="description__title">The most powerful social platform for discovery, and distribution.</div>
            //       <div className="description__text">
            //         <p>Now you can earn by publishing open access replicable quality papers for free.</p>
            //         <p>When you publish on Rosetta’s open access permissionless persistent repository, you create a market for your paper that you own, and earn the rewards based on it’s Impact.</p>
            //       </div>
            //       <div className="description__btn">
            //         <button className="btn" onClick={() => history.push("/features/")}>
            //             Learn more
            //         </button>
            //       </div>
            //     </div>
            //   </div>
            // </section>
          }
          <section className="landing__why">
            <div className="container">
              <div className="landing__why-title">Why Rosetta</div>
              <div className="why__list">
                <div className="why__list-item">
                  <div className="why__content">
                    <div className="why__title">Incentivised replication, and discussion papers</div>
                    <div className="why__text">
                      <i>All papers have reward pools for anyone to replicate, and discuss the paper</i>
                      Get your peers to review, and discuss your work before publishing elsewhere. Improve your work with clarifications, replication attempts to prove truth, exploration of the limits of datasets provided, and what uses the knowledge may work, or not work for.
                    </div>
                  </div>
                  <div className="why__image">
                    <img src={why2} alt="Incentivised replication, and discussion papers" />
                  </div>
                </div>
                <div className="why__list-item">
                  <div className="why__content">
                    <div className="why__title">Earn citations for all non-traditional research artifacts</div>
                    <div className="why__text">
                      <i>All knowledge is welcome to be submitted, not just papers</i>
                      Not all knowledge is contained in a paper format. Now you can earn citations for work that traditional publishers discard, but the scientific community loves: notebooks, datasets, graphs, visualisations, and more
                    </div>
                  </div>
                  <div className="why__image">
                    <img src={why6} alt="Earn citations for all non-traditional research artifacts" />
                  </div>
                </div>
                <div className="why__list-item">
                  <div className="why__content">
                    <div className="why__title">Forget rank-order, and static citations</div>
                    <div className="why__text">
                      <i>Not every contribution is equal</i>
                      Enter the percentage weight of co-authors, and the influence a citation had on the work at the time of publication for fairness
                    </div>
                  </div>
                  <div className="why__image">
                    <img src={why5} alt="Forget rank-order, and static citations" />
                  </div>
                </div>
                <div className="why__list-item">
                  <div className="why__content">
                    <div className="why__title">Permanent Archiving</div>
                    <div className="why__text">
                      <i>Ensure your knowledge survives forever</i>
                      Dead links are a thing of the past. All knowledge is published to Arweave, a distributed network with true information persistence
                    </div>
                  </div>
                  <div className="why__image">
                    <img src={why4} alt="Permanent Archiving" />
                  </div>
                </div>
                <div className="why__list-item">
                  <div className="why__content">
                    <div className="why__title">100% Open Source</div>
                    <div className="why__text">
                      <i>Community owned, and operated.</i>
                      Rosetta is open-source, independant, and 100% community owned by its users.
                      <br/>
                      <br/>
                      <b>No investors. No bullshit.</b>
                    </div>
                  </div>
                  <div className="why__image">
                    <img src={why1} alt="100% Open Source" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="landing__institutes">
            <div className="container">
              <div className="institutes__title">
                Authors from these institutions are in line for early access:
              </div>
              <div className="institutes__logos">
                <img src={oxfordLogo} alt="oxford" />
                <img src={harvardLogo} alt="harvard" />
                <img src={mitLogo} alt="mit" />
                <img src={nusLogo} alt="nus" />
                <img src={stanfordLogo} alt="stanford" />
                <img src={openaiLogo} alt="openai" />
              </div>
              <button className="btn btn__primary" onClick={() => history.push("/start/")}>
                  Get Early Access
              </button>
            </div>
          </section>
          <HowItWorks />
          {

            // <section className="landing__ownership">
            //   <div className="container">
            //     <div className="ownership__text">
            //       Over <span>271+ Million</span> authors can now see how much ownership, and extra income you can claim from your past papers in under 2 minutes.
            //     </div>
            //     <div className="ownership__logos">
            //       <img src={img1} alt="illustration 1" />
            //       <img src={img3} alt="illustration 2" />
            //       <img src={img2} alt="illustration 3" />
            //     </div>
            //   </div>
            // </section>
          }

        </>
    );
};

export default Landing;
