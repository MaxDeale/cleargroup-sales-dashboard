import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import styles from "./Stats.module.css";
import axios from "axios";

const Stats = ({ calls }) => {
  let [names, setNames] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://www.breakingbadapi.com/api/characters/`
      );
      console.log(res.data);
    };
    getData();
  }, []);

  const statistics = [
    {
      id: 1,
      name: "John Anderson",
      extension: "2311",
      calls: "123",
      threeMin: "5",
      percentage: "23",
    },
    {
      id: 2,
      name: "James Henders",
      extension: "2312",
      calls: "13",
      threeMin: "1",
      percentage: "2",
    },
    {
      id: 3,
      name: "Chris Smith",
      extension: "2311",
      calls: "123",
      threeMin: "5",
      percentage: "23",
    },
    {
      id: 4,
      name: "Sara Walters",
      extension: "2312",
      calls: "13",
      threeMin: "1",
      percentage: "2",
    },
    {
      id: 5,
      name: "Jimmy Bull",
      extension: "2312",
      calls: "13",
      threeMin: "1",
      percentage: "2",
    },
  ];
  const columns = [
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "extension",
      text: "Extension",
    },
    {
      dataField: "calls",
      text: "Total Calls",
    },
    {
      dataField: "threeMin",
      text: "3 Min +",
    },
    {
      dataField: "percentage",
      text: "Percentage",
    },
  ];

  return (
    <div id={styles.stats}>
      <BootstrapTable
        key={statistics.id}
        classes={styles.statTable}
        bodyClasses={styles.statTableBody}
        keyField="id"
        data={statistics}
        columns={columns}
        rowStyle={{
          background: "grey",
          color: "lightgreen",
          textAlign: "center",
        }}
      />
    </div>
  );
};

export default Stats;
