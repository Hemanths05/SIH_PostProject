import React from "react";
import Header from "./Header";
import MainBanner from "./MainBanner";
import './styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="background-container">
        <Header />
        <MainBanner />
      </div>
    </div>
  );
}

export default Home;
