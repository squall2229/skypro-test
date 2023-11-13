import { CartListProps } from "./CartList.types";

export const CartList = ({ products }: CartListProps) => {
    console.log(products);
    return <ul>CartList</ul>;
};
