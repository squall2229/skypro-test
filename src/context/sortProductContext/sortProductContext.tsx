import { createContext, FC, PropsWithChildren, useState } from "react";
import { SortProductContextProps, SortType } from "./types";

export const SortProductContext = createContext<SortProductContextProps>({
    value: SortType.Low,
    handleChangeSort: () => {},
});

export const SortProvider: FC<PropsWithChildren> = ({ children }) => {
    const [currentSort, setCurrentSort] = useState(SortType.Low);

    const handleChangeSort = (value: SortType) => {
        setCurrentSort(value);
    };

    return (
        <SortProductContext.Provider
            value={{
                value: currentSort,
                handleChangeSort,
            }}
        >
            {children}
        </SortProductContext.Provider>
    );
};
