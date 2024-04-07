interface IWidget {
    title: string;
    id: string;
    content: string;
    type: TypeWidget;
}

export type TypeWidget = "time" | "weather";
export default IWidget;
