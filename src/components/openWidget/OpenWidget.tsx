import { FC, MouseEvent, useContext } from "react";
import { Context } from "@/context/context.ts";
import { observer } from "mobx-react-lite";
import SelectChangeDataWidget from "@/components/openWidget/selectChange/SelectChangeDataWidget.tsx";
import ModalWindow from "@/components/modalWindow/ModalWindow.tsx";
import styles from "./openWidget.module.scss";
import Button from "@/components/UI/Button.tsx";

type EventClickModal<T> = MouseEvent<T> & {
    _isClickClose?: boolean;
};

const OpenWidget: FC = observer(() => {
    const { stateApp } = useContext(Context);
    if (!stateApp.nowWidget) return null;

    const { title, content } = stateApp.nowWidget;
    return (
        <ModalWindow closeWindow={() => stateApp.cleanWidget()}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{content}</p>
            <SelectChangeDataWidget widget={stateApp.nowWidget} />
            <div className={styles.btn}>
                <Button
                    onClick={(e: EventClickModal<HTMLButtonElement>) => {
                        e._isClickClose = true;
                    }}
                >
                    close
                </Button>
            </div>
        </ModalWindow>
    );
});

export default OpenWidget;
