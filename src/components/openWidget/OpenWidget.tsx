import { FC, MouseEvent, useContext } from "react";
import styles from "./openWidget.module.scss";
import { Context } from "@/context/context.ts";
import { observer } from "mobx-react-lite";
import SelectChangeDataWidget from "@/components/openWidget/SelectChangeDataWidget.tsx";
import ModalWindow from "@/components/modalWindow/ModalWindow.tsx";

type EventClickModal<T> = MouseEvent<T> & {
    _isClickClose?: boolean;
};

const OpenWidget: FC = observer(() => {
    const { stateApp } = useContext(Context);
    if (!stateApp.nowWidget) return null;

    const { title, content } = stateApp.nowWidget;
    return (
        <ModalWindow closeWindow={() => stateApp.cleanWidget()}>
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
        </ModalWindow>
    );
});

export default OpenWidget;
