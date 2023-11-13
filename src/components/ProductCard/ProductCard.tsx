import { ProductProps } from "./ProductCard.types";
import styles from "./ProductCard.module.scss";
import { toCurrency } from "../../utils/tuCurrency";
import { ProductActions } from "../ProductActions";
import { memo } from "react";

export const ProductCard = memo(
    ({ id, title, description, price }: ProductProps) => {
        return (
            <div className={styles.root}>
                <div className={styles.actions}>
                    <ProductActions id={id} />
                </div>
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
                        className={styles.img}
                    />
                </picture>
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <span className={styles.price}>{toCurrency(price)}</span>
                </div>
            </div>
        );
    },
);
