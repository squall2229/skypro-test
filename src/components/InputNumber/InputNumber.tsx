import styles from "./InputNumber.module.scss";
import IconUp from "../../assets/icon-up.svg?react";
import IconDown from "../../assets/icon-down.svg?react";
import cn from "classnames";
import { InputNumberProps } from "./InputNumber.types";

export const InputNumber = ({
    value,
    onChangeUp,
    onChangeDown,
}: InputNumberProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.field}>{value}</div>
            <button
                onClick={onChangeUp}
                className={cn(styles.button, styles.buttonUp)}
            >
                <IconUp />
            </button>
            <button
                disabled={value <= 1}
                onClick={onChangeDown}
                className={cn(styles.button, styles.buttonDown)}
            >
                <IconDown />
            </button>
        </div>
    );
};
