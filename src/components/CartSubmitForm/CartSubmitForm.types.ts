export type FormValues = {
    name: string;
    phone: string;
    address: string;
};

export type CartSubmitFormProps = {
    total: number;
    onSubmit: (values: FormValues) => void;
};
