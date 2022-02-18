import React, { useEffect } from "react";
import AOS from "aos";
import {ReactComponent as ArrowRight} from '../../images/icons/arrow-ios-forward-outline.svg';

import {ReactComponent as CloudIcon} from '../../images/icons/cloud.svg';
import {ReactComponent as ReviewIcon} from '../../images/icons/review.svg';
import {ReactComponent as PaidIcon} from '../../images/icons/paid.svg';

const HowItWorks = () => {
  useEffect(() => {
      AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="landing__works"  data-aos="fade-up">
      <div className="container">
        <div className="landing__works-title">How it works</div>
        <div className="landing__works-steps">
          <div className="landing__works-step">
            <div className="landing__works-step-icon">
              <CloudIcon />
            </div>
            <div className="landing__works-step-title">Publish</div>
            <div className="landing__works-step-text">1. Scientists can instantly publish a paper to Rosetta’s open access permissionless archive for free. Each published paper mints the co-authors a set of unique 'knowledge tokens', which receives supply of the native Rosetta token measured by the quality of the work.</div>
          </div>
          <ArrowRight />
          <div className="landing__works-step">
            <div className="landing__works-step-icon">
              <ReviewIcon />
            </div>
            <div className="landing__works-step-title">Replicate</div>
            <div className="landing__works-step-text">2. After publishing, a rewards pool forms to incentivise replication. Peer scientists replicate the authors work to ensure truthfulness, as well as adding discussion to it before they may publish elsewhere. Unlocking the ability for a distributed review, instead of closed doors peer-review.</div>
          </div>
          <ArrowRight />
          <div className="landing__works-step">
            <div className="landing__works-step-icon">
              <PaidIcon />
            </div>
            <div className="landing__works-step-title">Earn</div>
            <div className="landing__works-step-text">3. The knowledge tokens can be traded on an open market at any time to allow the crowd to buy knowledge tokens in early in anticipation of quality citations, and thus a larger flow of rewards to the paper that unlocks novel quality & truth signals before citations accrue.</div>
          </div>
        </div>
      </div>
    </section>
  )

}
export default HowItWorks;
