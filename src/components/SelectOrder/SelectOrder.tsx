import styles from "./SelectOrder.module.scss";
import IconTriangle from "../../assets/icon-triangle.svg?react";
import { useSortProductContext } from "../../context/sortProductContext";
import { ChangeEvent } from "react";
import { SortType } from "../../context/sortProductContext";

export const SelectOrder = () => {
    const { handleChangeSort, value } = useSortProductContext();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        handleChangeSort(event.target.value as SortType);
    };

    return (
        <div className={styles.root}>
            <div className={styles.field}>
                <label hidden htmlFor="selectOrder">
                    Выбрать порядок сортировки
                </label>
                <IconTriangle className={styles.icon} />
                <select
                    className={styles.select}
                    value={value}
                    onChange={handleChange}
                    name="selectOrder"
                    id="selectOrder"
                >
                    <option value="low">Порядок: сперва дешевле</option>
                    <option value="high">Порядок: сперва дороже</option>
                </select>
            </div>
        </div>
    );
};
