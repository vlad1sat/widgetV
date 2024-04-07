import Widget from "@/components/widget/Widget.tsx";
import { FC, useEffect, useState } from "react";
import IWidget from "@/interfaces/IWidget.ts";
import IAllWidgets from "@/interfaces/IAllWidgets.ts";

interface ITimeWidget {
    id: string;
    column: keyof IAllWidgets;
}

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

    return `Day: ${day}
Time: ${dayTime}
    `;
};

const TimeWidget: FC<ITimeWidget> = ({ id, column }) => {
    const [time, setTime] = useState<Date>(() => new Date());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(() => new Date());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <Widget
            widget={{
                title: "Time",
                content: contentTime(time),
                type: "time",
                id,
            }}
            column={column}
        />
    );
};

export default TimeWidget;
