import { makeAutoObservable } from "mobx";
import IAllWidgets from "@/interfaces/IAllWidgets.ts";
import { ReactElement } from "react";
import INowWidget from "@/interfaces/INowWidget.ts";
import IWidget, { IPrevWidget } from "@/interfaces/IWidget.ts";
import IBaseCustomWidget from "@/components/widgets/IBaseCustomWidget.ts";
import IBaseStructWidget from "@/components/widgets/IBaseStructWidget.ts";

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

    public addWidget<T extends IBaseStructWidget>(column: keyof IAllWidgets, widget: T) {
        this._allWidgets[column].push(widget);
        this.chooseWidget = defaultChooseWidget;
    }

    public deleteWidget(column: keyof IAllWidgets, key: string) {
        this._allWidgets[column] = this._allWidgets[column].filter(
            (el) => el.id !== key,
        );
    }

    public setWidget(state: INowWidget) {
        this.nowWidget = state;
        this.showWidget = true;
    }

    public cleanWidget() {
        this.nowWidget = null;
        this.showWidget = false;
    }

    public get allWidget() {
        return this._allWidgets;
    }

    public changeAllWidget<T extends IBaseStructWidget>(
        column: keyof IAllWidgets,
        id: string,
        newEl: T,
    ) {
        this._allWidgets[column] = this._allWidgets[column].map((el) => {
            if (el.id !== id) return el;
            return newEl;
        });
    }
}
