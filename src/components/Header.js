import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  let [date, setDate] = useState("");

  const getDate = () => {
    let curDate = new Date().toLocaleString();

    setDate(curDate);
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div id={styles.header}>
      <h1 id={styles.heading}>
        VW Sales <span className={styles.area}>Knysna</span>{" "}
      </h1>
      <h6>
        Date: <span className={styles.date}> {date}</span>{" "}
      </h6>
    </div>
  );
};

export default Header;
