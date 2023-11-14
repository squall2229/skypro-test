import { ProductProps } from "./ProductCard.types";
import styles from "./ProductCard.module.scss";
import { toCurrency } from "../../utils/tuCurrency";
import { ProductActions } from "../ProductActions";
import { ReactNode, memo } from "react";
import cn from "classnames";

export const ProductCard = memo(
    ({
        id,
        title,
        description,
        price,
        isCart = false,
        renderActions,
    }: ProductProps & {
        isCart?: boolean;
        renderActions?: () => ReactNode;
    }) => {
        return (
            <div
                className={cn(styles.root, {
                    [styles.rootIsCart]: isCart,
                })}
            >
                {!isCart && (
                    <div className={styles.actions}>
                        <ProductActions id={id} />
                    </div>
                )}
                <picture>
                    <source
                        srcSet={`/images/products/product-${id}.webp`}
                        type="image/webp"
                    />
                    <source
                        srcSet={`/images/products/product-${id}.jpg`}
                        type="image/jpeg"
                    />
                    <img
                        width={379}
                        height={250}
                        src={`/images/products/product-${id}.jpg`}
                        alt={title}
                        className={cn(styles.img, {
                            [styles.imgIsCart]: isCart,
                        })}
                    />
                </picture>
                <div
                    className={cn(styles.content, {
                        [styles.contentIsCart]: isCart,
                    })}
                >
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <span
                        className={cn(styles.price, {
                            [styles.priceIsCart]: isCart,
                        })}
                    >
                        {toCurrency(price)}
                    </span>
                    {renderActions && renderActions()}
                </div>
            </div>
        );
    },
);
