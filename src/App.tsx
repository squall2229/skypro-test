import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import "./styles/vars.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className={styles.root}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
