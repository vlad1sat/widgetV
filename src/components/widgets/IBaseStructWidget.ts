import IAllWidgets from "@/interfaces/IAllWidgets.ts";
import { TypeWidget } from "@/interfaces/IWidget.ts";

interface IBaseStructWidget {
    column: keyof IAllWidgets;
    type?: TypeWidget
    isDemo?: boolean;
    isChange?: boolean;
}

export default IBaseStructWidget;
