import { ProductList } from "../../components/ProductList";
import products from "../../data/products.json";
import { SelectOrder } from "../../components/SelectOrder";
import { SortProvider } from "../../context/sortProductContext/sortProductContext";
import styles from "./Main.module.scss";

export const Main = () => {
    return (
        <section className={styles.root}>
            <SortProvider>
                <SelectOrder />
                <ProductList products={products} />
            </SortProvider>
        </section>
    );
};
