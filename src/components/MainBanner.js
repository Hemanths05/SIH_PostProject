import React from "react";
import { Link } from "react-router-dom";
import "./styles/MainBanner.css";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="banner-text">
        <h1>
        Echoes of Service: AI-Powered Post Solutions Aligned with User Demographics
        </h1>
        <p>
        Connect consumers with personalized post office schemes based on age, gender, and income, 
        while admins access city-wise demographic statistics.
        </p>
        <Link to="/get-started-main-content">
          <button className="cta-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
