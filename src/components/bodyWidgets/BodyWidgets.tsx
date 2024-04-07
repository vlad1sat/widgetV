import { FC } from "react";
import Widget from "@/components/widget/Widget.tsx";
import TimeWidget from "@/components/widgets/timeWidget/TimeWidget.tsx";
import OpenWidget from "@/components/openWidget/OpenWidget.tsx";

const BodyWidgets: FC = () => {
    return (
        <tbody>
            <tr>
                <TimeWidget />
                <TimeWidget />
            </tr>
            <tr></tr>
        </tbody>
    );
};

export default BodyWidgets;
