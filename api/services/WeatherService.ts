import $api from "../api";
import IWeather from "./IWeather";
import { AxiosResponse } from "axios";

class WeatherService {
    public getWeather(city: string): Promise<AxiosResponse<IWeather>> {
        return $api.get('', {
            params: {
                q: city
            }
        })
    }
}

export default new WeatherService();
