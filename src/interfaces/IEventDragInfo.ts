import { DragEvent } from "react"
import IAllWidgets from "@/interfaces/IAllWidgets.ts";


interface IEventDragInfo {

        id: string,
        column: keyof IAllWidgets
}

export default IEventDragInfo;
