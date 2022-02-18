import React, { useEffect } from "react";
import AOS from "aos";

const Mission = () => {
  useEffect(() => {
      AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="landing__mission">
      <div className="container" data-aos="fade-up">
        <div className="landing__mission-title">Our Mission</div>
        <div className="landing__mission-text">
          Rosetta's mission is to preserve humanities knowledge forever, and incentivise the scientific method into a protocol dedicated to the pursuit of truth. The goal is to build humanities most compelling digital publishing network.
        </div>
        <div className="landing__mission-text">
          We want to create a future where the right to academic freedom cannot be destroyed. This is the right to search for truth, and to publish and teach what one holds to be true
        </div>
      </div>
    </section>
  )

}
export default Mission;
