import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import { ButtonProps, ButtonType } from "./Button.types";
import cn from "classnames";
import { Link } from "react-router-dom";

export const Button: FC<ButtonProps & PropsWithChildren> = ({
    children,
    to,
    onClick,
    type = ButtonType.Light,
}) => {
    return to ? (
        <Link className={cn(styles.button, styles[type])} to={to}>
            {children}
        </Link>
    ) : (
        <button onClick={onClick} className={cn(styles.button, styles[type])}>
            {children}
        </button>
    );
};
