import styles from "./chooseWidget.module.scss";
import TimeWidget, { ITimeWidget } from "@/components/widgets/timeWidget/TimeWidget.tsx";
import { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "@/context/context.ts";
import WeatherWidget, { IWeatherWidget } from "@/components/widgets/weatherWidget/WeatherWidget.tsx";
import { TypeWidget } from "@/interfaces/IWidget.ts";
import { defaultChooseWidget } from "@/context/stateApp.ts";

const ChooseWidget = () => {
    const { stateApp } = useContext(Context);
    const { column } = stateApp.chooseWidget;
    const id = String(Date.now());
    const propsDemoWidget = useMemo(
        () => ({
            id,
            column: column || "first",
            isDemo: true,
        }),
        [id, column],
    );
    const [typeWidget, setTypeWidget] = useState<TypeWidget | null>(null);

    useEffect(() => {
        const nowColumn = column || "first";
        const props = { id, column: nowColumn };
        switch (typeWidget) {
            case "time":
                stateApp.addWidget<ITimeWidget>(nowColumn, {...props, type: "time"} );
                break;
            case "weather":
                stateApp.addWidget<IWeatherWidget>(nowColumn, {...props, type: "weather"});
                break;
        }
    }, [typeWidget]);

    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <h3>Выберите виджет</h3>
                <div onClick={() => setTypeWidget(() => "time")}>
                    <TimeWidget {...propsDemoWidget} />
                </div>
                <div onClick={() => setTypeWidget(() => "weather")}>
                    <WeatherWidget {...propsDemoWidget} />
                </div>
            </div>
        </div>
    );
};

export default ChooseWidget;