interface IWeather {
    "location": {
        "name": string,
        "country": string,
        "localtime": string
    },
    "current": {
        "last_updated": string,
        "temp_c": 6.0,
        "temp_f": 42.8,
        "condition": {
            "text": string,
        },
    }
}

export default IWeather;
