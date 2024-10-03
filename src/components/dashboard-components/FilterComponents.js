// src/components/FilterComponent.js
import React, { useState } from 'react';

const FilterComponent = ({ onFilter }) => {
  const [genderFilter, setGenderFilter] = useState('Men');
  const [ageRange, setAgeRange] = useState({ start: '', end: '' });
  const [incomeRange, setIncomeRange] = useState({ start: '', end: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure no negative values are submitted
    if (ageRange.start < 0 || ageRange.end < 0 || incomeRange.start < 0 || incomeRange.end < 0) {
      alert('Please enter non-negative values for age and income ranges.');
      return;
    }

    onFilter({ gender: genderFilter, ageRange, incomeRange });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Gender:
        <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
      </label>

      {/* Age Range */}
      <label>
        Age Start:
        <input 
          type="number" 
          value={ageRange.start} 
          min="0"  // Prevent negative values
          onChange={(e) => setAgeRange({ ...ageRange, start: e.target.value })} 
          placeholder="Start Age" 
        />
      </label>
      <label>
        Age End:
        <input 
          type="number" 
          value={ageRange.end} 
          min="0"  // Prevent negative values
          onChange={(e) => setAgeRange({ ...ageRange, end: e.target.value })} 
          placeholder="End Age" 
        />
      </label>

      {/* Income Range */}
      <label>
        Income Start:
        <input 
          type="number" 
          value={incomeRange.start} 
          min="0"  // Prevent negative values
          onChange={(e) => setIncomeRange({ ...incomeRange, start: e.target.value })} 
          placeholder="Start Income" 
        />
      </label>
      <label>
        Income End:
        <input 
          type="number" 
          value={incomeRange.end} 
          min="0"  // Prevent negative values
          onChange={(e) => setIncomeRange({ ...incomeRange, end: e.target.value })} 
          placeholder="End Income" 
        />
      </label>

      <button type="submit">Apply Filter</button>
    </form>
  );
};

export default FilterComponent;
