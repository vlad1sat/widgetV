import IWeather from "@/api/services/IWeather.ts";

class WeatherLogic {
    public contentWeather(data: IWeather) {
        const { location, current } = data;
        return `
        City: ${location.name}
        Country: ${location.country}
        Temp C: ${current.temp_c}
        Temp F: ${current.temp_f}
        `;
    }

    public readonly cities: string[] = ["Yekaterinburg", "Moscow", "Sidney"];
}

export default new WeatherLogic();
