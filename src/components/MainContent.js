import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import './styles/MainContent.css';

/**
 * MainContent component is a `1st part` of the `multi-step registration form`.
 * 
 * This component allows the user to select the *account type*.
 */
export default function MainContent() {
  const navigate = useNavigate();
  
  const [selectedAccountType, setSelectedAccountType] = useState("consumer");

  const handleAccountTypeChange = (event) => {
    setSelectedAccountType(event.target.value);
  };

  const handleNext = () => {
    if (selectedAccountType === "consumer") {
      toast.success("Logged in as Consumer!");
      navigate("/find-schemes");
    } else {
      toast.success("Logged in as Post Service Person!");
      navigate("/population-statistics-dashboard");
    }
  };

  return (
    <div className="main-content">
      <h3>Choose Your Account Type:</h3>
      <p>Select the role that best describes your activity on the platform.</p>
      <form className="account-form">
        
        <div className="select">
          <label>
            <input
              type="radio"
              name="account"
              value="consumer"
              checked={selectedAccountType === 'consumer'}
              onChange={handleAccountTypeChange}
            />
            Consumer
            <div className="selectbar">Filter and view eligible post office Schemes based on your age,income and gender.</div>
          </label>
        </div>

        <div className="select">
          <label>
            <input
              type="radio"
              name="account"
              value="postServiceProvider"
              checked={selectedAccountType === 'postServiceProvider'}
              onChange={handleAccountTypeChange}
            />
           Post Service Person
            <div className="selectbar">View Analytics and graph showing gender distribution age and income based data of customers.</div>
          </label>
        </div>

       

        <button type="button" onClick={handleNext} className="continue-btn">Continue</button>
      </form>
    </div>
  );
}

// export default MainContent;
