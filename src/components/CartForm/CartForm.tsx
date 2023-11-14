import { useCartContext } from "../../context/cartContext";
import { CartList } from "../CartList";
import styles from "./CartForm.module.scss";
import { transformProductDataByState } from "../../context/cartContext";
import { CartActions } from "../CartActions";
import { useCallback } from "react";
import { CartSubmitForm } from "../CartSubmitForm";
import { getTotal } from "../../context/cartContext/helpers";
import { ToastContainer, toast } from "react-toastify";
import { FormValues } from "../CartSubmitForm/CartSubmitForm.types";
import { createPortal } from "react-dom";
import { Button } from "../Button";
import { ButtonType } from "../Button/Button.types";

export const CartForm = () => {
    const { state, clearItems } = useCartContext();

    const products = state ? transformProductDataByState(state) : [];
    const total = state ? getTotal(state) : 0;

    const handleClearItems = useCallback(() => {
        clearItems();
    }, [clearItems]);

    const handleSubmit = useCallback((values: FormValues) => {
        toast(
            `Вы создали заказ! Данные заказа: Имя Фамилия - ${values.name}, Телефон - ${values.phone}, Адресс - ${values.address}`,
        );
    }, []);

    return (
        <div className={styles.root}>
            {createPortal(
                <ToastContainer
                    draggable={true}
                    autoClose={2000}
                    position="bottom-left"
                />,
                document.body,
            )}
            {products && products.length > 0 ? (
                <div className={styles.container}>
                    <div className={styles.products}>
                        <CartList products={products} />
                        <div className={styles.actionsContainer}>
                            <CartActions onClearItems={handleClearItems} />
                        </div>
                    </div>
                    <CartSubmitForm total={total} onSubmit={handleSubmit} />
                </div>
            ) : (
                <div className={styles.emptyContainer}>
                    <p>Корзина пуста</p>
                    <div className={styles.emptyButton}>
                        <Button to="/" type={ButtonType.Dart}>
                            На главную
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
