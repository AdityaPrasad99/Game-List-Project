import React from "react";
import GamesList from '../components/GamesList'

const Homepage = () => {
  return (
    <div className="container">
      <div className="page-title">Popular Games</div>

      <GamesList />
    </div>
  );
};

export default Homepage;
