import { Button } from "../Button";
import cn from "classnames";
import styles from "./CartActions.module.scss";
import { ButtonType } from "../Button/Button.types";
import { CartActionsProps } from "./CartActions.types";
import { memo } from "react";

export const CartActions = memo(({ onClearItems }: CartActionsProps) => {
    return (
        <div className={styles.actions}>
            <div className={cn(styles.buttonClearCart, styles.buttonContainer)}>
                <Button onClick={onClearItems}>Очистить корзину</Button>
            </div>
            <div className={styles.buttonContainer}>
                <Button to="/" type={ButtonType.Dart}>
                    Продолжить покупки
                </Button>
            </div>
        </div>
    );
});
