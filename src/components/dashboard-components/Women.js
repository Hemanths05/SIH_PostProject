// src/components/Women.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Women = () => {
  const ageData = [
    { ageGroup: '0-18', value: 11000 },
    { ageGroup: '19-35', value: 14000 },
    { ageGroup: '36-50', value: 9000 },
    { ageGroup: '51+', value: 7000 },
  ];

  const ageGroups = ageData.map(data => data.ageGroup);
  const ageValues = ageData.map(data => data.value);

  const barChartData = {
    labels: ageGroups,
    datasets: [
      {
        label: "Women's Age Distribution",
        data: ageValues,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
      <h2>Women's Age Distribution</h2>
      <Bar data={barChartData} />
      <Pie data={pieChartData} />
    </div>
  );
};

export default Women;
