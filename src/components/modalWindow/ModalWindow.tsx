import React, { FC, HTMLAttributes, MouseEvent, ReactNode } from "react";
import styles from "@/components/openWidget/openWidget.module.scss";

type EventClickModal<T> = MouseEvent<T> & {
    _isClickClose?: boolean;
};

interface IModalWindow extends HTMLAttributes<HTMLDivElement> {
    closeWindow: () => void;
}

const ModalWindow: FC<IModalWindow> = ({ children, closeWindow }) => {
    return (
        <div
            onClick={(e: EventClickModal<HTMLDivElement>) => {
                if (e._isClickClose || e._isClickClose == null) {
                    closeWindow();
                }
            }}
            className={styles.background}
        >
            <div
                onClick={(e: EventClickModal<HTMLDivElement>) => {
                    if (e._isClickClose == null) e._isClickClose = false;
                }}
                className={styles.modal}
            >
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
