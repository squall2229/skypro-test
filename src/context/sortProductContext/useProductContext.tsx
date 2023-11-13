import { useContext } from "react";
import { SortProductContext } from "./sortProductContext";

export const useSortProductContext = () => {
    const { value, handleChangeSort } = useContext(SortProductContext);

    return {
        value,
        handleChangeSort,
    };
};
