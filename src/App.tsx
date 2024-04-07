import { Header } from "@/components/header/Header.tsx";
import { lazy, useContext } from "react";
import { Context } from "@/context/context.ts";
import { observer } from "mobx-react-lite";
import OpenWidget from "@/components/openWidget/OpenWidget.tsx";
const Table = lazy(() => import("@/components/table/Table.tsx"));

const App = observer(() => {
    const { stateApp } = useContext(Context);

    return (
        <Context.Provider value={{ stateApp }}>
            <Header />
            <Table />
            {stateApp.showWidget && <OpenWidget />}
        </Context.Provider>
    );
});

export default App;
