import TimeWidget, {
    ITimeWidget,
} from "@/components/widgets/timeWidget/TimeWidget.tsx";
import { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "@/context/context.ts";
import WeatherWidget, {
    IWeatherWidget,
} from "@/components/widgets/weatherWidget/WeatherWidget.tsx";
import { TypeWidget } from "@/interfaces/IWidget.ts";
import ModalWindow from "@/components/modalWindow/ModalWindow.tsx";
import { defaultChooseWidget } from "@/context/stateApp.ts";
import styles from "./chooseWidget.module.scss";
const ChooseWidget = () => {
    const { stateApp } = useContext(Context);
    const { column } = stateApp.chooseWidget;
    const id = String(Date.now());
    const [typeWidget, setTypeWidget] = useState<TypeWidget | null>(null);

    const propsDemoWidget = useMemo(
        () => ({
            id,
            column: column || "first",
            isDemo: true,
        }),
        [id, column],
    );

    useEffect(() => {
        const nowColumn = column || "first";
        const props = { id, column: nowColumn };
        switch (typeWidget) {
            case "time":
                stateApp.addWidget<ITimeWidget>(nowColumn, {
                    ...props,
                    type: "time",
                });
                break;
            case "weather":
                stateApp.addWidget<IWeatherWidget>(nowColumn, {
                    ...props,
                    type: "weather",
                });
                break;
        }
    }, [typeWidget]);

    return (
        <ModalWindow
            closeWindow={() => (stateApp.chooseWidget = defaultChooseWidget)}
        >
            <h3 className={styles.title}>Выберите виджет</h3>
            <div className={styles.blockWidgets}>
                <div onClick={() => setTypeWidget(() => "time")}>
                    <TimeWidget {...propsDemoWidget} />
                </div>
                <div onClick={() => setTypeWidget(() => "weather")}>
                    <WeatherWidget {...propsDemoWidget} />
                </div>
            </div>
        </ModalWindow>
    );
};

export default ChooseWidget;
