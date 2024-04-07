import { FC, MouseEvent, useContext } from "react";
import styles from "./openWidget.module.scss"
import { Context } from "@/context/context.ts";
import { observer } from "mobx-react-lite";


type EventClickModal<T> = MouseEvent<T> & {
    _isClickClose?: boolean;
}

interface IOpenWidget {
    setShowWidget: () => void;
}

const OpenWidget: FC = observer(() =>  {


    const {stateApp} =useContext(Context);

    return (
        <div onClick={(e: EventClickModal<HTMLDivElement>) => {
            if (e._isClickClose || e._isClickClose == null) {
                stateApp.showWidget = false;
            }}} className={styles.background}>
            <div onClick={(e: EventClickModal<HTMLDivElement>) => {
                if (e._isClickClose == null) e._isClickClose = false }} className={styles.modal}>
                <h3>Weather</h3>
                <button
                    onClick={(e: EventClickModal<HTMLButtonElement>) => {
                        e._isClickClose = true;
                    }}
                    type="button"
                    className="btn btn-danger float-end"
                >
                    delete
                </button>
            </div>
        </div>
    );
});

export default OpenWidget;
