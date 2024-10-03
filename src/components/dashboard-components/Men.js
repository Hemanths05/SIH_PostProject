// src/components/Men.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Men = () => {
  const ageData = [
    { ageGroup: '0-18', value: 12000 },
    { ageGroup: '19-35', value: 15000 },
    { ageGroup: '36-50', value: 10000 },
    { ageGroup: '51+', value: 8000 },
  ];

  const ageGroups = ageData.map(data => data.ageGroup);
  const ageValues = ageData.map(data => data.value);

  const barChartData = {
    labels: ageGroups,
    datasets: [
      {
        label: 'Men Age Distribution',
        data: ageValues,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ageGroups,
    datasets: [
      {
        data: ageValues,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div>
      <h2>Men's Age Distribution</h2>
      <Bar data={barChartData} />
      <Pie data={pieChartData} />
    </div>
  );
};

export default Men;
