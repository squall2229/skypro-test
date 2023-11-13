import { CartForm } from "../../components/CartForm";
import { CartProvider } from "../../context/cartContext/cartContext";

export const Cart = () => {
    return (
        <section>
            <CartProvider>
                <CartForm />
            </CartProvider>
        </section>
    );
};
