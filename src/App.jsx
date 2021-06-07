import "./App.css";
import TicketCard from "./components/TicketCard";
import styles from "./App.module.scss";
import team from "./team.js";

function App() {
  const renderEmployees = () => {
    const employeesCard = team.map((i) => {
      return <TicketCard name={i.name} role={i.role} />;
    });
    return employeesCard;
  };

  return (
    <div className="App">
      <h1>Ticket Tracker</h1>

      <div className={styles.cardContainer}>{renderEmployees()}</div>
    </div>
  );
}

export default App;
