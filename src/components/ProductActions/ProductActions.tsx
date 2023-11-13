import IconLike from "../../assets/icon-like.svg?react";
import IconBuy from "../../assets/icon-buy.svg?react";
import styles from "./ProductActions.module.scss";

export const ProductActions = () => {
    return (
        <div className={styles.actions}>
            <button className={styles.buttonAction}>
                <IconBuy />
            </button>
            <button className={styles.buttonAction}>
                <IconLike />
            </button>
        </div>
    );
};
