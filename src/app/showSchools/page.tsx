"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get("src/pages/api/showSchool.ts");
        setSchools(response.data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };
    fetchSchools();
  }, []);

  return (
    <div className={styles.container}>
      {schools.map((school: any) => (
        <div className={styles.card} key={school.id}>
          <img src={school.image} alt={school.name} className={styles.image} />
          <h3>{school.name}</h3>
          <p>{school.address}</p>
          <p>{school.city}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowSchools;
