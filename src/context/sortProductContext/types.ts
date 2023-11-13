export enum SortType {
    Low = "low",
    High = "high",
}

export type SortProductContextProps = {
    value: SortType;
    handleChangeSort: (value: SortType) => void;
};
