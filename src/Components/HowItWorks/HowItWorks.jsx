import React, { useEffect } from "react";
import AOS from "aos";
import {ReactComponent as LineEven} from '../../images/line-even.svg';
import {ReactComponent as LineOdd} from '../../images/line-odd.svg';

const HowItWorks = () => {
  useEffect(() => {
      AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="landing__works">
      <div className="container">
        <div className="landing__works-title">How it works</div>
        <div className="landing__works-steps">
          <div className="landing__works-step" data-aos="fade-up">
            <div className="landing__works-step-title">1. Publish & share</div>
            <div className="landing__works-step-text">Everytime an author publishes a piece of knowledge or artefact a unique set of knowledge tokens are created, and divided between the authors.</div>
          </div>
          <LineOdd className="landing__works-step-curve" data-aos="fade-up" />
          <div className="landing__works-step" data-aos="fade-up">
            <div className="landing__works-step-title">2. Distributed Review</div>
            <div className="landing__works-step-text">Truthful science is whether a piece of knowledge replicates, not what peer reviewers say behind closed doors. Once published a reward pool is available for anyone to replicate, and attempt falsification on the work as well as discussing the knowledge to improve upon it.</div>
          </div>
          <LineEven className="landing__works-step-curve" data-aos="fade-up" />
          <div className="landing__works-step" data-aos="fade-up">
            <div className="landing__works-step-title">3. Earn</div>
            <div className="landing__works-step-text">Over time $Rosetta rewards accrue to the owners of the knowledge tokens based on their Impact with the average paper earning $1,000 per annum. The knowledge tokens can be bought, and sold at any time to give new quality signals.</div>
          </div>
        </div>
      </div>
    </section>
  )

}
export default HowItWorks;
