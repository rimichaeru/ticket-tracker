import React, { useState } from "react";
import styles from "./TicketCard.module.scss";

const TicketCard = (props) => {
  const { name, role } = props;

  const [counter, updateCounter] = useState(0);

  const increase = () => {
    updateCounter(counter + 1);
  };

  const decrease = () => {
    if (counter - 1 <= 0) {
      updateCounter(0);
    } else {
      updateCounter(counter - 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.employeeInfo}>
          <h2>{name}</h2>
          <h3>{role}</h3>
        </div>
        <div className={styles.counter}>
          <p>Counter</p>
          <p className="display">{counter}</p>
          <button onClick={decrease}>-</button>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
