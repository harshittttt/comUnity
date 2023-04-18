import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://img.freepik.com/free-vector/happy-rich-people-growing-financial-plant-watering-money-tree-pile-cash-analyzing-wealth-prosperity_74855-15451.jpg?w=1060&t=st=1681070876~exp=1681071476~hmac=9f847a373a891acbabcd4d6d07cca18a9ae6b13de34ea3e66d12574bd874906f"
            alt="aboutUs"
          />
        </div>
        <p className={styles.content}>
          <br />
          Our platform was created with the goal of helping people bring their ideas to life. We believe that everyone should have the opportunity to make a positive impact on the world, and crowdfunding is a powerful way to make that happen.

          Our mission is to empower people and organizations to raise funds for their projects, causes, and initiatives. We want to create a community where people can come together to support each other, share their stories, and make a difference in the world.

          We believe that transparency and honesty are essential to building trust with our users. That's why we are committed to being transparent about our fees, policies, and procedures. We also prioritize the security and privacy of our users' data, and we work hard to ensure that our platform is safe and secure.
          <br />
          <br />
          we are constantly innovating and improving our platform to better serve our users. We are passionate about helping people achieve their goals, and we are committed to making the crowdfunding process as easy and accessible as possible.

          Thank you for choosing comUnity to help you bring your ideas to life. We look forward to supporting you on your journey!
          <br />

        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
