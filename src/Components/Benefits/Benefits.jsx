import React, { useEffect } from "react";
import AOS from "aos";
import { useHistory } from "react-router-dom";

const Benefits = () => {
  let history = useHistory();

  useEffect(() => {
      AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="landing__benefits">
      <div className="container" data-aos="fade-up">
        <div className="landing__benefits-title">Benefits of early access</div>
        <div className="landing__benefits-grid">
          <div className="landing__benefits-list">
            <div className="landing__benefits-item">
              <div className="landing__benefits-item-title">Claim Bonus Rosetta Rewards</div>
              <div className="landing__benefits-item-text">We've mapped humanities past knowledge graph, and applied our ImpactScore algorithm to give you rewards if you've published quality knowledge in the past.</div>
            </div>
            <div className="landing__benefits-item">
              <div className="landing__benefits-item-title">Engage in beta testing</div>
              <div className="landing__benefits-item-text">Get to use the product before anyone else, and earn a larger sum of rewards for your efforts.</div>
            </div>
            <div className="landing__benefits-item">
              <div className="landing__benefits-item-title">Shape the product</div>
              <div className="landing__benefits-item-text">We're community owned, and operated. Get a say in how the initial product is built, and shaped.</div>
            </div>
          </div>
          <div className="landing__benefits-cta">
            <div className="landing__benefits-cta-text">Became a part of Rosetta and start to get rewards for knowledges</div>
            <button className="btn btn__primary" onClick={() => history.push("/start/")}>
                Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  )

}
export default Benefits;
