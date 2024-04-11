class TimeLogic {
    public readonly timeZone: string[] = [
        "Europe/Madrid",
        "Asia/Tokyo",
        "Europe/Moscow",
        "Asia/Omsk",
        "Australia/Sydney",
        "Asia/Yekaterinburg",
    ];

    public readonly defaultTimeZone: string = "Europe/Moscow";

    public contentTime(time: Date, timeZone: string): string {
        const day = new Intl.DateTimeFormat("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(time);

        const dayTime = new Intl.DateTimeFormat("en-GB", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZone,
        }).format(time);

        return `
        Day: ${day}
        Time: ${dayTime}
        TimeZone: ${timeZone}
    `;
    }
}

export default new TimeLogic();
