import React, { Component } from "react";
import Chart from "react-apexcharts";
import styles from "./CallsByReps.module.css";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        series: [12, 33, 44, 22, 45],
        labels: [
          "John Anderson",
          "James Henders",
          "Chris Smith",
          "Sara Walters",
          "Jimmy Bull",
        ],
      },
    };
  }

  render() {
    return (
      <div id={styles.calls}>
        <h4>Calls By Rep:</h4>
        <div className="donut">
          <Chart
            options={this.state.options}
            series={this.state.options.series}
            type="donut"
            width="360"
          />
        </div>
      </div>
    );
  }
}

export default Donut;
