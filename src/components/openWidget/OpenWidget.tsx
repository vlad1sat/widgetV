import { FC, MouseEvent, useContext } from "react";
import styles from "./openWidget.module.scss";
import { Context } from "@/context/context.ts";
import { observer } from "mobx-react-lite";

type EventClickModal<T> = MouseEvent<T> & {
    _isClickClose?: boolean;
};

const OpenWidget: FC = () => {
    const { stateApp } = useContext(Context);
    if (!stateApp.nowWidget) return null;
    const { title, content } = stateApp.nowWidget;
    return (
        <div
            onClick={(e: EventClickModal<HTMLDivElement>) => {
                if (e._isClickClose || e._isClickClose == null) {
                    stateApp.cleanWidget();
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
                <h3>{title}</h3>
                <p>{content}</p>
                <button
                    onClick={(e: EventClickModal<HTMLButtonElement>) => {
                        e._isClickClose = true;
                    }}
                    type="button"
                    className="btn btn-danger float-end"
                >
                    close
                </button>
            </div>
        </div>
    );
};

export default OpenWidget;
