import React from "react";
import {ReactComponent as LineEven} from '../../images/line-even.svg';
import {ReactComponent as LineOdd} from '../../images/line-odd.svg';

const HowItWorks = () => (
  <section className="landing__works">
    <div className="container">
      <div className="landing__works-title">How it works</div>
      <div className="landing__works-steps">
        <div className="landing__works-step">
          <div className="landing__works-step-title">1. Start by Publishing Open Access for Free</div>
          <div className="landing__works-step-text">Publish your paper on Rosetta instantly, alongside all your research outputs for free. Just pay the small storage costs (insert rough guess of $ per gb) to ensure your knowledge gets stored permanently.</div>
        </div>
        <LineOdd className="landing__works-step-curve" />
        <div className="landing__works-step">
          <div className="landing__works-step-title">2. Own your work</div>
          <div className="landing__works-step-text">After you publish your paper a new set of unique knowledge tokens are created. You, and your co-authors own the knowledge tokens for it, which you can sell at any time, or hold to earn Rosetta rewards.</div>
        </div>
        <LineEven className="landing__works-step-curve" />
        <div className="landing__works-step">
          <div className="landing__works-step-title">3. Earn from Quality Knowledge</div>
          <div className="landing__works-step-text">New Rosetta rewards are minted over time, and distributed weekly to papers in the network based on their ImpactScore. This unlocks the ability for the owners of quality knowledge tokens to earn.</div>
        </div>
        <LineOdd className="landing__works-step-curve" />
        <div className="landing__works-step">
          <div className="landing__works-step-title">4. The Pursuit of Truth</div>
          <div className="landing__works-step-text">As your paper earns Rosetta tokens, some of those go into a replication pool to incentivise other authors to replicate the work, and ensure its truthfulness. Validators earn Rosetta rewards for replicating, discovering fraud, and providing critically enquiry on papers.</div>
        </div>
      </div>
    </div>
  </section>
)

export default HowItWorks;
