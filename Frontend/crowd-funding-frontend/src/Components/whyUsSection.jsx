import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Safe and trusted place to give and receive help</h1>
          <p className={styles.para}>
            With a global team dedicated to trust and safety, including experts with diverse and professional
            backgrounds, we have successfully managed fundraisers worldwide for more than a decade.
            Our industry experience and expertise have allowed us to balance safety with speed to quickly distribute
            funds to beneficiaries while complying with global laws and regulations, as the safety of our community is
            our top priority.
          </p>
        </div>
        <div className="col-md-4">
          <img className={styles.image} src="https://d25oniaj7o2jcw.cloudfront.net/footer-flower-cta.png" alt="HappyKids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
