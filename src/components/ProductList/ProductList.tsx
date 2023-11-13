import { ProductCard } from "../ProductCard/ProductCard";
import { ProductListProps } from "./ProductList.types";
import styles from "./ProductList.module.scss";
import {
    SortType,
    useSortProductContext,
} from "../../context/sortProductContext";
import { useMemo } from "react";

const sortLowToHigh = (arr: ProductListProps["products"]) =>
    arr.sort((a, b) => a.price - b.price);

const sortHighToLow = (arr: ProductListProps["products"]) =>
    arr.sort((a, b) => b.price - a.price);

export const ProductList = ({ products }: ProductListProps) => {
    const { value } = useSortProductContext();

    const sortedProduct = useMemo(
        () =>
            value === SortType.Low
                ? sortLowToHigh(products)
                : sortHighToLow(products),
        [value, products],
    );

    return (
        <ul className={styles.list}>
            {sortedProduct.map((product) => (
                <li key={product.id} className={styles.item}>
                    <ProductCard {...product} />
                </li>
            ))}
        </ul>
    );
};
