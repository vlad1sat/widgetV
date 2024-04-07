import Widget from "@/components/widget/Widget.tsx";
import { useEffect, useMemo, useState } from "react";

const params = {
    dateStyle: "full",
    timeStyle: "long",
};

const contentTime = (time: Date): string => {
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
    }).format(time);

    return (
    `Day: ${day}
Time: ${dayTime}
    `);
};

const TimeWidget = () => {
    const [time, setTime] = useState<Date>(() => new Date());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(() => new Date());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return <Widget title="Time" content={contentTime(time)} />;
};

export default TimeWidget;
