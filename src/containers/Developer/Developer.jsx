import React from "react";
import styles from "./Developer.module.scss";
import TicketCard from "../../components/TicketCard";
import team from "../../team.js";

const Developer = () => {
  const renderEmployees = () => {
    const employeesCard = team.map((i) => {
      if (i.role.includes("Developer") && !i.role.includes("Junior")) {
        return <TicketCard name={i.name} role={i.role} />;
      }
    });
    return employeesCard;
  };

  return (
    <div className="App">
      <h1>Ticket Tracker</h1>

      <div className={styles.cardContainer}>{renderEmployees()}</div>
    </div>
  );
};

export default Developer;
