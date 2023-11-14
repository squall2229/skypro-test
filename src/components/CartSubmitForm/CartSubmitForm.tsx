import { Button } from "../Button";
import { CartSubmitFormProps, FormValues } from "./CartSubmitForm.types";
import styles from "./CartSubmitForm.module.scss";
import { toCurrency } from "../../utils/tuCurrency";
import { memo } from "react";

export const CartSubmitForm = memo(
    ({ total = 0, onSubmit }: CartSubmitFormProps) => {
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const form = event.currentTarget;
            const formData = new FormData(form);

            const values: FormValues = {
                name: formData.get("name") as string,
                phone: formData.get("phone") as string,
                address: formData.get("address") as string,
            };

            onSubmit(values);
        };

        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Оформление заказа</h2>
                <div className={styles.fieldsContainer}>
                    <div className={styles.field}>
                        <label hidden htmlFor="name">
                            Имя Фамилия
                        </label>
                        <input
                            className={styles.input}
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Имя Фамилия"
                        />
                    </div>
                    <div className={styles.field}>
                        <label hidden htmlFor="phone">
                            Телефон
                        </label>
                        <input
                            className={styles.input}
                            name="phone"
                            id="phone"
                            type="tel"
                            placeholder="+ 7 904 000 80 80"
                        />
                    </div>
                    <div className={styles.field}>
                        <label hidden htmlFor="address">
                            Адрес доставки
                        </label>
                        <input
                            className={styles.input}
                            id="address"
                            name="address"
                            type="text"
                            placeholder="Адрес доставки"
                        />
                    </div>
                </div>

                <p className={styles.total}>
                    Итого: <b className={styles.value}>{toCurrency(total)}</b>
                </p>
                <div className={styles.buttonContainer}>
                    <Button>Оформить заказ</Button>
                </div>
            </form>
        );
    },
);
