import styles from "./widget.module.scss";
import { FC, MouseEvent, useContext } from "react";
import { Context } from "@/context/context.ts";
import IWidget from "@/interfaces/IWidget.ts";
import IAllWidgets from "@/interfaces/IAllWidgets.ts";

type EventClickWidget<T> = MouseEvent<T> & {
    _isDelete?: boolean;
};

interface IBlockWidget {
    widget: IWidget;
    column: keyof IAllWidgets;
}

const Widget: FC<IBlockWidget> = ({ widget, column }) => {
    const { stateApp } = useContext(Context);
    const { title, content } = widget;
    return (
        <div>
            <div
                className={styles.widget}
                onClick={(e: EventClickWidget<HTMLDivElement>) => {
                    if (e._isDelete) return;
                    stateApp.setWidget(widget);
                }}
            >
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.content}>{content}</p>
                <div className={styles.btnDelete}>
                    <button
                        onClick={(e: EventClickWidget<HTMLButtonElement>) => {
                            e._isDelete = true;
                            stateApp.deleteWidget(column, widget.id);
                        }}
                        type="button"
                        className="btn btn-danger float-end"
                    >
                        delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Widget;
