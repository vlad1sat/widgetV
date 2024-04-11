interface IWeather {
    location: {
        name: string;
        country: string;
        localtime: string;
    };
    current: {
        last_updated: string;
        temp_c: number;
        temp_f: number;
        condition: {
            text: string;
        };
    };
}

export default IWeather;
