import React, { ChangeEvent, FC, ReactElement, useContext } from "react";
import TimeWidget, { ITimeWidget } from "@/components/widgets/timeWidget/TimeWidget.tsx";
import timeLogic from "@/tools/TimeLogic.ts";
import { Context } from "@/context/context.ts";
import INowWidget from "@/interfaces/INowWidget.ts";
import weatherLogic from "@/tools/WeatherLogic.ts";
import WeatherWidget, { IWeatherWidget } from "@/components/widgets/weatherWidget/WeatherWidget.tsx";


interface ISelectChangeDataWidget {
    widget: INowWidget
}

const SelectChangeDataWidget: FC<ISelectChangeDataWidget> = ({widget}) => {
    const { stateApp } = useContext(Context);

    const { type, id, column } = widget;
    const options = type === "time" ? timeLogic.timeZone : weatherLogic.cities;

    const changeWidget = (e: ChangeEvent<HTMLSelectElement>) => {
        const newID = String(Date.now());
        const props = { id: newID, column, isChange: true}
        switch (type) {
            case "time":
                stateApp.changeAllWidget<ITimeWidget>(
                    column,
                    id,
                    {...props, type: "time", timeZone: e.target.value}
                );
                break;
            case "weather":
                stateApp.changeAllWidget<IWeatherWidget>(
                    column,
                    id,
                    {...props, type: "weather", city: e.target.value}
                );
        }
    }

    return (
        <select
            onChange={changeWidget}
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
        >
            <option selected disabled>
                {type === "time" ? "Change time zone:" : "Change city:"}
            </option>
            {options.map((el) => (
                <option key={el} value={el}>
                    {el}
                </option>
            ))}
        </select>
    );
};

export default SelectChangeDataWidget;
