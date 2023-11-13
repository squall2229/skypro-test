import { ToastContainer, toast } from "react-toastify";
import IconLike from "../../assets/icon-like.svg?react";
import IconBuy from "../../assets/icon-buy.svg?react";
import styles from "./ProductActions.module.scss";
import { ProductActionsProps } from "./ProductActions.types";
import { addItemToCart } from "../../actions/addItemToCart";
import "react-toastify/dist/ReactToastify.css";
import { createPortal } from "react-dom";

export const ProductActions = ({ id }: ProductActionsProps) => {
    const handleClickAddItem = () => {
        addItemToCart(id);
        toast("Товар добавлен в корзину!");
    };

    const handleClickLike = () => {
        toast("Вы лайкнули этот товар!");
    };

    return (
        <div className={styles.actions}>
            {createPortal(
                <ToastContainer
                    draggable={true}
                    autoClose={2000}
                    position="bottom-left"
                />,
                document.body,
            )}
            <button
                onClick={handleClickAddItem}
                className={styles.buttonAction}
            >
                <IconBuy />
            </button>
            <button onClick={handleClickLike} className={styles.buttonAction}>
                <IconLike />
            </button>
        </div>
    );
};
