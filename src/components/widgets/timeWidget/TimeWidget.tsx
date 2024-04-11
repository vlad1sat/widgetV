import Widget from "@/components/widget/Widget.tsx";
import { FC, useEffect, useState } from "react";
import IAllWidgets from "@/interfaces/IAllWidgets.ts";
import timeLogic from "@/tools/TimeLogic.ts";
import IBaseCustomWidget from "@/components/widgets/IBaseCustomWidget.ts";

export interface ITimeWidget extends IBaseCustomWidget {
    timeZone?: string;
}

const TimeWidget: FC<ITimeWidget> = ({
    id,
    column,
    timeZone = timeLogic.defaultTimeZone,
    isDemo,
    isChange,
}) => {
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
                content: timeLogic.contentTime(time, timeZone),
                type: "time",
                id,
            }}
            id={id}
            column={column}
            isDemo={isDemo}
            isChange={isChange}
        />
    );
};

export default TimeWidget;
