import { ReactElement } from "react";
import IWidget, { IPrevWidget } from "@/interfaces/IWidget.ts";
import IBaseStructWidget from "@/components/widgets/IBaseStructWidget.ts";

interface IAllWidgets {
    first: IBaseStructWidget[];
    second: IBaseStructWidget[];
    third: IBaseStructWidget[];
}

export default IAllWidgets;
