import { FC, useContext } from "react";
import styles from "./th.module.scss";
import IAllWidgets from "@/interfaces/IAllWidgets.ts";
import { Context } from "@/context/context.ts";
import { observer } from "mobx-react-lite";
import TimeWidget from "@/components/widgets/timeWidget/TimeWidget.tsx";
import WeatherWidget from "@/components/widgets/weatherWidget/WeatherWidget.tsx";

interface IColumn {
    column: keyof IAllWidgets;
}

const Column: FC<IColumn> = observer(({ column }) => {
    const { stateApp } = useContext(Context);
    const dropElement = () => {
        if (!stateApp.eventDragInfo) return;
        const { id, column: columnDrag } = stateApp.eventDragInfo;
        const deletedWidget = stateApp.deleteWidget(columnDrag, id);
        stateApp.addWidget(column, deletedWidget);
    };

    const drawWidgets = () => {
        return stateApp.allWidgets[column].map((el) => {
            const { type, id } = el;
            const props = { ...el, column };
            switch (type) {
                case "time":
                    return <TimeWidget key={id} {...props} />;
                case "weather":
                    return <WeatherWidget key={id} {...props} />;
                default:
                    return null;
            }
        });
    };

    return (
        <div
            onDrop={dropElement}
            onDragOver={(e) => e.preventDefault()}
            className={styles.column}
        >
            <h3 className={styles.title}>{column}</h3>
            <div className={styles.btn}>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() =>
                        (stateApp.chooseWidget = {
                            state: true,
                            column,
                        })
                    }
                >
                    add widget
                </button>
            </div>
            {drawWidgets()}
        </div>
    );
});

export default Column;
