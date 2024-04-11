import styles from "./widget.module.scss";
import { FC, MouseEvent, useContext, useEffect, DragEvent } from "react";
import { Context } from "@/context/context.ts";
import IWidget from "@/interfaces/IWidget.ts";
import INowWidget from "@/interfaces/INowWidget.ts";
import IBaseStructWidget from "@/components/widgets/IBaseStructWidget.ts";
import IEventDragInfo from "@/interfaces/IEventDragInfo.ts";

type EventClickWidget<T> = MouseEvent<T> & {
    _isDelete?: boolean;
};

interface IBlockWidget extends IBaseStructWidget {
    widget: IWidget;
}

const Widget: FC<IBlockWidget> = ({ widget, column, isDemo, isChange }) => {
    const { stateApp } = useContext(Context);
    const { title, content, id } = widget;
    const nowWidget: INowWidget = { ...widget, column: column };

    useEffect(() => {
        if (isChange) {
            stateApp.nowWidget = nowWidget;
        }
    }, [isChange]);
    return (
        <div
            draggable={!isDemo}
            onDragStart={() => {
                stateApp.eventDragInfo = {
                    id, column
            }}}
            className={styles.widget}
            onClick={(e: EventClickWidget<HTMLDivElement>) => {
                if (e._isDelete || isDemo) return;
                stateApp.setWidget(nowWidget);
            }}
        >
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.content}>{content}</p>
            <div className={styles.btnDelete}>
                <button
                    onClick={(e: EventClickWidget<HTMLButtonElement>) => {
                        if (isDemo) return;
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
    );
};

export default Widget;
