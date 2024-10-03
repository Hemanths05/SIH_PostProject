// src/components/MenIncome.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const MenIncome = () => {
  const incomeData = [
    { incomeGroup: '0-20k', value: 8000 },
    { incomeGroup: '21-40k', value: 10000 },
    { incomeGroup: '41-60k', value: 7000 },
    { incomeGroup: '61k+', value: 5000 },
  ];

  const categories = incomeData.map((data) => data.incomeGroup);
  const values = incomeData.map((data) => data.value);

  const barChartData = {
    labels: categories,
    datasets: [
      {
        label: 'Income Data',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: categories,
    datasets: [
      {
        data: values,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div>
      <h2>Men's Income Distribution</h2>
      <h3>Bar Chart</h3>
      <Bar data={barChartData} />
      <h3>Pie Chart</h3>
      <Pie data={pieChartData} />
    </div>
  );
};

export default MenIncome;
