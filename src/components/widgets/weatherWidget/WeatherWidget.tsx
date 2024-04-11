import Widget from "@/components/widget/Widget.tsx";
import timeLogic from "@/tools/TimeLogic.ts";
import IBaseCustomWidget from "@/components/widgets/IBaseCustomWidget.ts";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import WeatherService from "../../../../api/services/WeatherService.ts";
import weatherLogic from "@/tools/WeatherLogic.ts";

export interface IWeatherWidget extends IBaseCustomWidget {
    city?: string;
}

const WeatherWidget: FC<IWeatherWidget> = ({
    column,
    isDemo,
    isChange,
    city = "Yekaterinburg",
    id,
}) => {
    const { data, isLoading } = useQuery({
        queryFn: () => WeatherService.getWeather(city),
        queryKey: ["weather", city],
        retry: 3,
        staleTime: 1000,
    });

    if (isLoading) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
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
