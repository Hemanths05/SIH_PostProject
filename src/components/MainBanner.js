import React from "react";
import { Link } from "react-router-dom";
import "./styles/MainBanner.css";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="banner-text">
        <h1>
        Echoes of Need: AI-Powered Financial Solutions Aligned with Life Cycles

        </h1>
        <p>Connect farmers and buyers with transparent, secure contract farming agreements.</p>
        <Link to="/main-content">
          <button className="cta-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
