import Widget from "@/components/widget/Widget.tsx";
import { FC, useEffect, useState } from "react";
import timeLogic from "@/tools/TimeLogic.ts";
import IBaseStructWidget from "@/components/widgets/IBaseStructWidget.ts";

export interface ITimeWidget extends IBaseStructWidget {
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
