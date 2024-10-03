// src/components/GenderStatistics.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const GenderStatistics = ({ gender, ageRange, incomeRange }) => {
  const ageData = {
    labels: ['0-18', '19-35', '36-50', '51-65', '65+'],
    datasets: [
      {
        label: `${gender} Age Distribution`,
        data: [20, 30, 25, 15, 10], // Example data, replace with filtered data if needed
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const incomeData = {
    labels: ['Low Income', 'Middle Income', 'High Income'],
    datasets: [
      {
        label: `${gender} Income Distribution`,
        data: [30, 40, 30], // Example data, replace with filtered data if needed
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>{gender} Statistics</h2>
      
      {/* Age Distribution */}
      <h3>Age Distribution</h3>
      <Bar data={ageData} />
      <Pie data={ageData} />
      
      {/* Display selected age range */}
      <div>
        <h4>Selected Age Range:</h4>
        <p>Start: {ageRange.start}</p>
        <p>End: {ageRange.end}</p>
      </div>

      {/* Income Distribution */}
      <h3>Income Distribution</h3>
      <Bar data={incomeData} />
      <Pie data={incomeData} />
      
      {/* Display selected income range */}
      <div>
        <h4>Selected Income Range:</h4>
        <p>Start: {incomeRange.start}</p>
        <p>End: {incomeRange.end}</p>
      </div>
    </div>
  );
};

export default GenderStatistics;
