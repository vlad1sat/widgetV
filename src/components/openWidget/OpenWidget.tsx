import { FC, MouseEvent, useContext, useState } from "react";
import styles from "./openWidget.module.scss";
import { Context } from "@/context/context.ts";
import TimeWidget from "@/components/widgets/timeWidget/TimeWidget.tsx";
import { observer } from "mobx-react-lite";
import timeLogic from "@/tools/TimeLogic.ts";
import SelectChangeDataWidget from "@/components/openWidget/SelectChangeDataWidget.tsx";
import widget from "@/components/widget/Widget.tsx";

type EventClickModal<T> = MouseEvent<T> & {
    _isClickClose?: boolean;
};

const OpenWidget: FC = observer(() => {
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
                <SelectChangeDataWidget widget={stateApp.nowWidget} />
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
});

export default OpenWidget;
