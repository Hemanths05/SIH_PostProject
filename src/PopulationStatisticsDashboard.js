import React, { useState, useEffect } from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Men from './components/dashboard-components/Men';
import Women from './components/dashboard-components/Women';
import MenIncome from './components/dashboard-components/Menincome';
import WomenIncome from './components/dashboard-components/Womenincome';
import FilterComponent from './components/dashboard-components/FilterComponents';
import './PopulationStatisticsDashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function PopulationStatisticsDashboard() {
  const [filteredData, setFilteredData] = useState(null);
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    const fetchPopulationData = () => {
      const data = {
        labels: ['Men', 'Women'],
        values: [4800000, 5200000],
      };
      setPopulationData(data);
    };

    fetchPopulationData();
  }, []);

  const handleFilter = (filters) => {
    const simulatedData = {
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
      values: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
    };
    setFilteredData(simulatedData);
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  const populationChartData = populationData ? {
    labels: populationData.labels,
    datasets: [
      {
        data: populationData.values,
        backgroundColor: ['#3498db', '#e74c3c'],
        hoverBackgroundColor: ['#2980b9', '#c0392b'],
      },
    ],
  } : null;

  const filteredChartData = filteredData ? {
    labels: filteredData.labels,
    datasets: [
      {
        label: 'Filtered Data',
        data: filteredData.values,
        backgroundColor: ['#1abc9c', '#f39c12', '#9b59b6', '#34495e'],
        hoverBackgroundColor: ['#16a085', '#e67e22', '#8e44ad', '#2c3e50'],
      },
    ],
  } : null;

  return (
    <div className="Dashboard">
      <header className="app-header">
        <h1>Population Statistics Dashboard</h1>
      </header>
      
      <main className="app-content">
        <section className="population-stats card">
          <h2>Gender Distribution</h2>
          <div className="chart-container">
            {populationData && <Doughnut data={populationChartData} options={chartOptions} />}
          </div>
          <table className="population-table">
            <thead>
              <tr>
                <th>Gender</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              {populationData && populationData.labels.map((label, index) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{populationData.values[index].toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        
        <section className="gender-stats">
          <div className="men-stats card">
            <h3>Men Age Statistics</h3>
            <Men />
          </div>
          <div className="women-stats card">
            <h3>Women Age Statistics</h3>
            <Women />
          </div>
        </section>
        
        <section className="income-stats">
          <div className="men-income card">
            <h3>Men Income Statistics</h3>
            <MenIncome />
          </div>
          <div className="women-income card">
            <h3>Women Income Statistics</h3>
            <WomenIncome />
          </div>
        </section>
        
        <section className="filter-section card">
          <h3>Filter Data</h3>
          <FilterComponent onFilter={handleFilter} />
        </section>
        
        <section className="filter-output card">
          <h3>Filtered Results</h3>
          {filteredData && (
            <div className="chart-container">
              <Bar data={filteredChartData} options={chartOptions} />
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default PopulationStatisticsDashboard;