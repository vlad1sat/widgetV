import $api from "../api.ts";
import IWeather from "./IWeather.ts";
import { AxiosResponse } from "axios";

class WeatherService {
    public getWeather(city: string): Promise<AxiosResponse<IWeather>> {
        return $api.get("", {
            params: {
                q: city,
            },
        });
    }
}

export default new WeatherService();
