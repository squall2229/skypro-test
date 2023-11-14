export type ButtonProps = {
    type?: ButtonType;
    to?: string;
    onClick?: () => void;
};

export enum ButtonType {
    Light = "light",
    Dart = "dark",
}
