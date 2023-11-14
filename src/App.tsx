import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import "./styles/vars.css";
import { Header } from "./components/Header";
import { CartProvider } from "./context/cartContext";

function App() {
    return (
        <div className={styles.root}>
            <CartProvider>
                <Header />
                <Outlet />
            </CartProvider>
        </div>
    );
}

export default App;
