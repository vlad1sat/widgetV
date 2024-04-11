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
    return (
        <div onDrop={(e) => console.log(e)} onDragOver={(e) => console.log("e", e)} className={styles.column}>
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
            {stateApp.allWidget[column].map((el) => {
                const {type, id} = el;
                const props = {...el, column};
                switch (type) {
                    case "time":
                        return <TimeWidget key={id} {...props} />
                    case "weather":
                        return <WeatherWidget key={id} {...props} />
                    default:
                        return null;
                }
            })}
        </div>
    );
});

export default Column;
