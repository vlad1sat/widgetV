import { makeAutoObservable } from "mobx";
import IWidget from "@/interfaces/IWidget.ts";
import IAllWidgets from "@/interfaces/IAllWidgets.ts";
import { ReactElement } from "react";

export default class StateApp {
    private _showWidget: boolean = false;
    private _allWidgets: IAllWidgets = {
        first: [],
        second: [],
        third: [],
    };
    private _nowWidget: IWidget | null = null;

    constructor() {
        makeAutoObservable(this);
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

    public set nowWidget(state: IWidget | null) {
        this._nowWidget = state;
    }

    public addWidget(column: keyof IAllWidgets, widget: ReactElement) {
        this._allWidgets[column].push(widget);
    }

    public deleteWidget(column: keyof IAllWidgets, key: string) {
        console.log(column, key);
        this._allWidgets[column] = this._allWidgets[column].filter(
            (el) => el.key !== key,
        );
    }

    public setWidget(state: IWidget) {
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

    private set allWidget(state: IAllWidgets) {
        this._allWidgets = state;
    }
}
