import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FindSchemes.css";
import { toast } from "react-toastify";

const FindSchemes = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [income, setIncome] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Scheme details fetched successfully!");
    // Save the information in session storage or state management
    sessionStorage.setItem("userInfo", JSON.stringify({ age, gender, income }));
    navigate("/display-schemes"); // Navigate to the display page
  };

  return (
    <div id="find-schemes">
      <div className="page-wrapper">
        <div className="form-container">
          <h1 className="form-title">Find Schemes</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label className="form-label">Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Gender:</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="form-select"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Income:</label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FindSchemes;
