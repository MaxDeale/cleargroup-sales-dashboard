import React, { Component } from "react";
import GaugeChart from "react-gauge-chart";
import styles from "./Totals.module.css";

class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPercent: 75,
      totalCalls: 453,
      totalThreeMins: 34,
    };
  }

  render() {
    return (
      <div id={styles.totals}>
        <h4>Totals:</h4>
        <div className={styles.chartContainer}>
          <GaugeChart
            id="gauge-chart"
            nrOfLevels={1}
            percent={0.7}
            arcWidth={0.3}
            colors={["rgb(41, 199, 21)"]}
          />
        </div>

        <div className={styles.totalsContainer}>
          <div className={styles.totalCalls}>
            <h6>Calls</h6>
            <p>700</p>
          </div>
          <div className={styles.totalThreeMin}>
            <h6>3 Min + </h6>
            <p>53</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Totals;
