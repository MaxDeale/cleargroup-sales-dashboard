import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Stats from "./components/flexgrid/Stats";
import CallsByReps from "../src/components/charts/CallsByReps";
import Totals from "../src/components/charts/Totals";

import "./App.css";

const App = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <Header />
        <div className="chart-container">
          <CallsByReps />
          <Totals />
        </div>

        <Stats />
      </div>
    </div>
  );
};

export default App;
