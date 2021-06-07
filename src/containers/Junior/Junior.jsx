import React from "react";
import styles from "./Junior.module.scss";
import TicketCard from "../../components/TicketCard";
import team from "../../team";

const Junior = () => {
  const renderEmployees = () => {
    const employeesCard = team.map((i) => {
      if (i.role.includes("Junior")) {
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

export default Junior;
