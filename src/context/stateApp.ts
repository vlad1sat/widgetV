import { makeAutoObservable } from "mobx";

export default class StateApp {
    private _showWidget: boolean = false;
    private _nowWidget = null;

    constructor() {
        makeAutoObservable(this);
    }

    public get showWidget(): boolean {
        return this._showWidget;
    }

    public set showWidget(state: boolean) {
        this._showWidget = state;
    }
}
