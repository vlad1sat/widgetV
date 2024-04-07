import { Header } from "@/components/header/Header.tsx";
import { lazy, useContext, useState } from "react";
import OpenWidget from "@/components/openWidget/OpenWidget.tsx";
import { Context } from "@/context/context.ts";
import { observer } from "mobx-react-lite";
const Table = lazy(() => import("@/components/table/Table.tsx"));

const App = observer(() => {
    const {stateApp} = useContext(Context);

    return (
        <Context.Provider value={{ stateApp }}>
            <Header />
            <Table />
            {stateApp.showWidget && <OpenWidget />}
            <button onClick={() => stateApp.showWidget = true} >click</button>
        </Context.Provider>
    );
});

export default App;
