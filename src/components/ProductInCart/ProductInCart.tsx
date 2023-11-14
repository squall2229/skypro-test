import { memo } from "react";
import { useCartContext } from "../../context/cartContext";
import { InputNumber } from "../InputNumber";
import { ProductCard, ProductProps } from "../ProductCard";
import styles from "./ProductInCart.module.scss";

export const ProductInCart = memo(
    (props: ProductProps & { withInput?: boolean }) => {
        const { state, removeItem, addCount, removeCount } = useCartContext();

        const handleRemoveItem = () => {
            removeItem(props.id);
        };

        const handleAddCount = () => {
            addCount(props.id);
        };

        const handleRemoveCount = () => {
            removeCount(props.id);
        };

        return (
            <div className={styles.root}>
                <div className={styles.content}>
                    <ProductCard
                        {...props}
                        isCart
                        renderActions={() => (
                            <div className={styles.actions}>
                                <button className={styles.button}>
                                    Избранные
                                </button>
                                <button
                                    onClick={handleRemoveItem}
                                    className={styles.button}
                                >
                                    Удалить
                                </button>
                            </div>
                        )}
                    />
                </div>
                {props.withInput && (
                    <InputNumber
                        value={state ? state[props.id] : 1}
                        onChangeUp={handleAddCount}
                        onChangeDown={handleRemoveCount}
                    />
                )}
            </div>
        );
    },
);
