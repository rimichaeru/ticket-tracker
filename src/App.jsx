import './App.css';
import TicketCard from './components/TicketCard';
import styles from "./App.module.scss"

function App() {
  return (
    <div className="App">
      <h1>Ticket Tracker</h1>

      <div className={styles.cardContainer}>
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      </div>
    </div>
  );
}

export default App;
