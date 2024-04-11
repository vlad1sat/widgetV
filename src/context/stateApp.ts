import { makeAutoObservable } from "mobx";
import IAllWidgets from "@/interfaces/IAllWidgets.ts";
import INowWidget from "@/interfaces/INowWidget.ts";
import IBaseStructWidget from "@/components/widgets/IBaseStructWidget.ts";
import IEventDragInfo from "@/interfaces/IEventDragInfo.ts";

interface IChooseWidget {
    state: boolean;
    column: keyof IAllWidgets | null;
}

export const defaultChooseWidget: IChooseWidget = {
    state: false,
    column: null,
};

export default class StateApp {
    private _showWidget: boolean = false;
    private _chooseWidget: IChooseWidget = defaultChooseWidget;
    private _allWidgets: IAllWidgets = {
        first: [],
        second: [],
        third: [],
    };
    private _nowWidget: INowWidget | null = null;
    private _eventDragInfo: IEventDragInfo | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    public get chooseWidget(): IChooseWidget {
        return this._chooseWidget;
    }

    public set chooseWidget(state: IChooseWidget) {
        this._chooseWidget = state;
    }

    public get showWidget(): boolean {
        return this._showWidget;
    }

    private set showWidget(state: boolean) {
        this._showWidget = state;
    }

    public get nowWidget() {
        return this._nowWidget;
    }

    public set nowWidget(state: INowWidget | null) {
        this._nowWidget = state;
    }

    public get eventDragInfo() {
        return this._eventDragInfo;
    }

    public set eventDragInfo(state: IEventDragInfo | null) {
        this._eventDragInfo = state;
    }

    public setWidget(state: INowWidget) {
        this.nowWidget = state;
        this.showWidget = true;
    }

    public cleanWidget() {
        this.nowWidget = null;
        this.showWidget = false;
    }

    public get allWidgets() {
        return this._allWidgets;
    }

    public addWidget<T extends IBaseStructWidget>(
        column: keyof IAllWidgets,
        widget: T,
    ) {
        this._allWidgets[column].push(widget);
        this.chooseWidget = defaultChooseWidget;
    }

    public deleteWidget(column: keyof IAllWidgets, key: string) {
        const idx = this.allWidgets[column].findIndex((el) => el.id === key);
        const deletedWidget = this.allWidgets[column][idx];
        this.allWidgets[column].splice(idx, 1);
        return deletedWidget;
    }

    public changeAllWidget<T extends IBaseStructWidget>(
        column: keyof IAllWidgets,
        id: string,
        newEl: T,
    ) {
        this.allWidgets[column] = this.allWidgets[column].map((el) => {
            if (el.id !== id) return el;
            return newEl;
        });
    }
}
