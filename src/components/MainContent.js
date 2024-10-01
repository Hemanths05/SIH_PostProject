import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/MainContent.css';

function MainContent() {
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const navigate = useNavigate();

  const handleAccountTypeChange = (e) => {
    setSelectedAccountType(e.target.value);
  };

  const handleNext = () => {
    if (selectedAccountType) {
      // Store selected account type in local storage
      localStorage.setItem('accountType', selectedAccountType);

      // Navigate to email verification page
      navigate('/email-verification');
    }
  };

  return (
    <div className="main-content">
      <div className="progress-bar">
        <div className="stage active">1</div>
        <div className="stage">2</div>
        <div className="stage">3</div>
        <div className="stage">4</div>
        <div className="stage">5</div>
      </div>
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

export default MainContent;
