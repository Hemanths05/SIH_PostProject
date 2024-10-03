// src/DisplaySchemes.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DisplaySchemes.css";
import schemesData from "./../data/schemesData";

const DisplaySchemes = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || {};
  console.log(userInfo.gender);
  const [selectedScheme, setSelectedScheme] = useState(null);

  const handleBack = () => {
    navigate("/"); // Redirect to the form page
  };

  const getRelevantSchemes = () => {
    let relevantSchemes = schemesData;
    if (userInfo.gender === "male" && userInfo.age >= 55) {
      relevantSchemes = relevantSchemes.filter((scheme) => {
        return (
          scheme.name.includes(
            "Senior Citizens Savings Scheme Account(SCSS)"
          ) ||
          scheme.name.includes("Post Office Savings Account(SB)") ||
          scheme.name.includes("National Savings Monthly Income Account(MIS)")
        );
      });
    } else if (userInfo.gender === "male" && userInfo.income >= 10000) {
      relevantSchemes = relevantSchemes.filter((scheme) => {
        return (
          scheme.name.includes("National Savings Time Deposit Account (TD)") ||
          scheme.name.includes(
            "5-Year Post Office Recurring Deposit Account (RD)"
          ) ||
          scheme.name.includes("Post Office Savings Account(SB)") ||
          scheme.name.includes(
            "National Savings Monthly Income Account(MIS)"
          ) ||
          scheme.name.includes("Public Provident Fund Account(PPF )")
        );
      });
    } else if (userInfo.gender === "female" && userInfo.age <= 10) {
      relevantSchemes = relevantSchemes.filter((scheme) => {
        return (
          scheme.name.includes("Mahila Samman Savings Certificate") ||
          scheme.name.includes("Sukanya Samriddhi Account(SSA)")
        );
      });
      console.log(relevantSchemes);
    } else if (userInfo.gender === "female") {
      relevantSchemes = relevantSchemes.filter((scheme) => {
        return (
          scheme.name.includes("Mahila Samman Savings Certificate") ||
          scheme.name.includes("Post Office Savings Account(SB)") ||
          scheme.name.includes("National Savings Monthly Income Account(MIS)")
        );
      });
      console.log(relevantSchemes);
    }
    return relevantSchemes;
  };

  const relevantSchemes = getRelevantSchemes();

  return (
    <div className="display-container">
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
      <h2 className="title">Recommended Schemes:</h2>
      <ul className="schemes-list">
        {relevantSchemes.map((scheme, index) => (
          <li
            key={index}
            className="scheme-item"
            onClick={() => setSelectedScheme(scheme)}
          >
            {scheme.name}
          </li>
        ))}
      </ul>

      {selectedScheme && (
        <div className="scheme-details">
          <h3 className="details-title">Scheme Description:</h3>
          <p className="scheme-description">{selectedScheme.description}</p>
          <h4 className="section-heading">Uses:</h4>
          <ul className="uses-list">
            {selectedScheme.uses.map((use, index) => (
              <li key={index} className="uses-item">
                {use}
              </li>
            ))}
          </ul>
          <h4 className="section-heading">Conditions:</h4>
          <ul className="conditions-list">
            {selectedScheme.procedure.map((step, index) => (
              <li key={index} className="conditions-item">
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* <button className='back-button' onClick={handleBack}>Back to Form</button> */}
    </div>
  );
};

export default DisplaySchemes;
