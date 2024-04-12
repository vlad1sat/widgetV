import { FC, HTMLAttributes } from "react";
import styles from "./button.module.scss";

export type TypeButton = "red" | "blue" | "borderBlue";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
    customStyle?: TypeButton;
}

const Button: FC<IButton> = ({ children, customStyle = "red", ...props }) => {
    return (
        <button
            className={`${styles.btn} ${customStyle === "red" && styles.red} ${customStyle === "blue" && styles.blue} ${customStyle === "borderBlue" && styles.borderBlue}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
