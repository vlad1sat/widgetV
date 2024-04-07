import StateApp from "@/context/stateApp.ts";
import { createContext } from "react";

const stateApp = new StateApp()

const Context = createContext({ stateApp })

export {Context, stateApp};
