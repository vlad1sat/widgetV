import IWidget from "@/interfaces/IWidget.ts";
import IAllWidgets from "@/interfaces/IAllWidgets.ts";

interface INowWidget extends IWidget {
    column: keyof IAllWidgets;
}

export default INowWidget;
