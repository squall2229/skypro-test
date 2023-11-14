import { RootState } from "../../actions/addItemToCart";
import productsData from "../../data/products.json";

export const transformProductDataByState = (state: RootState) => {
    return state
        ? productsData.filter((product) =>
              Object.keys(state).includes(product.id),
          )
        : [];
};
