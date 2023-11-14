import { RootState } from "../../actions/addItemToCart";
import productsData from "../../data/products.json";

export const transformProductDataByState = (state: RootState) => {
    return state
        ? productsData.filter((product) =>
              Object.keys(state).includes(product.id),
          )
        : [];
};

export const getTotal = (state: RootState) => {
    const products = transformProductDataByState(state);

    return products.reduce((acc, current) => {
        const totalItem = state[current.id] * current.price;

        return (acc += totalItem);
    }, 0);
};
