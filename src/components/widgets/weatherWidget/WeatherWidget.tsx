import Widget from "@/components/widget/Widget.tsx";
import { FC, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import weatherLogic from "@/tools/WeatherLogic.ts";
import IBaseStructWidget from "@/components/widgets/IBaseStructWidget.ts";
import styles from "./spinner.module.scss";
import WeatherService from "@/api/services/WeatherService.ts";

export interface IWeatherWidget extends IBaseStructWidget {
    city?: string;
}

const WeatherWidget: FC<IWeatherWidget> = ({
    column,
    isDemo,
    isChange,
    city = "Yekaterinburg",
    id,
}) => {
    const { data, isLoading, isError } = useQuery({
        queryFn: () => WeatherService.getWeather(city),
        queryKey: ["weather", city],
        retry: 3,
        staleTime: 1000,
    });

    useEffect(() => {
        isError && alert("Ошибка сервера на получение данных о погоде!");
    }, [isError]);

    if (isLoading) {
        return (
            <div
                className={`d-flex justify-content-center align-items-center ${styles.spinner}`}
            >
                <div
                    className="spinner-border text-primary spinner-border-sm"
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <>
            {data && (
                <Widget
                    widget={{
                        title: "Weather",
                        content: weatherLogic.contentWeather(data.data),
                        type: "weather",
                        id,
                    }}
                    id={id}
                    column={column}
                    isDemo={isDemo}
                    isChange={isChange}
                />
            )}
        </>
    );
};

export default WeatherWidget;
