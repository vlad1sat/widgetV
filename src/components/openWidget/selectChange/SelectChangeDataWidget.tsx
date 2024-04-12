import { ChangeEvent, FC, useContext } from "react";
import { ITimeWidget } from "@/components/widgets/timeWidget/TimeWidget.tsx";
import timeLogic from "@/tools/TimeLogic.ts";
import { Context } from "@/context/context.ts";
import INowWidget from "@/interfaces/INowWidget.ts";
import weatherLogic from "@/tools/WeatherLogic.ts";
import { IWeatherWidget } from "@/components/widgets/weatherWidget/WeatherWidget.tsx";
import styles from "./selectChange.module.scss";

interface ISelectChangeDataWidget {
    widget: INowWidget;
}

const SelectChangeDataWidget: FC<ISelectChangeDataWidget> = ({ widget }) => {
    const { stateApp } = useContext(Context);

    const { type, id, column } = widget;
    const options = type === "time" ? timeLogic.timeZone : weatherLogic.cities;

    const changeWidget = (e: ChangeEvent<HTMLSelectElement>) => {
        const newID = String(Date.now());
        const value = e.target.value;
        const props = { id: newID, column, isChange: true };
        switch (type) {
            case "time":
                stateApp.changeAllWidget<ITimeWidget>(column, id, {
                    ...props,
                    type: "time",
                    timeZone: value,
                });
                break;
            case "weather":
                stateApp.changeAllWidget<IWeatherWidget>(column, id, {
                    ...props,
                    type: "weather",
                    city: value,
                });
        }
    };

    return (
        <div>
            <select
                onChange={changeWidget}
                className={`form-select form-select-sm ${styles.select}`}
                aria-label=".form-select-sm example"
            >
                <option selected disabled>
                    {type === "time" ? "Change time zone:" : "Change city:"}
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectChangeDataWidget;
