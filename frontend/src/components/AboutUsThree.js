import React from "react";
import "./AboutUsThree.css";
import { Link } from "react-router-dom";
import abbImage from "../assets/abb.jpg"; // Update the path accordingly

const AboutUsThree = () => {
  return (
    <div className="aboutusthree">
      <div className="aboutusthree__images">
        <img src={abbImage} alt="photo1" />
        <img src={abbImage} alt="photo2" />
        <img src={abbImage} alt="photo3" />
        <img src={abbImage} alt="photo4" />
      </div>
      <div className="forText__three">
        <h5>About Us</h5>
        <h2>Our Stellar Values</h2>
        <p>
          The cornerstone of our establishment is 'Making the benefits of
          exceptional medical services reach the people without any
          discrimination.' We strive to live up to this philosophy through our
          stellar values.
        </p>
        <Link to="/search">Go right at it!</Link>
      </div>
    </div>
  );
};

export default AboutUsThree;
