import React from "react";
import styles from "./Other.module.scss";
import TicketCard from "../../components/TicketCard";
import team from "../../team";

const Other = () => {
  const renderEmployees = () => {
    const employeesCard = team.map((i) => {
      if (!i.role.includes("Developer")) {
        return <TicketCard name={i.name} role={i.role} />;
      }
    });
    return employeesCard;
  };

  return <div className={styles.cardContainer}>{renderEmployees()}</div>;
};

export default Other;
