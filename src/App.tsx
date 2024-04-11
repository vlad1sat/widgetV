import { Header } from "@/components/header/Header.tsx";
import { lazy, useContext, useEffect } from "react";
import { Context } from "@/context/context.ts";
import { observer } from "mobx-react-lite";
import OpenWidget from "@/components/openWidget/OpenWidget.tsx";
import ChooseWidget from "@/components/chooseWidget/ChooseWidget.tsx";
import WeatherService from "../api/services/WeatherService.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Table = lazy(() => import("@/components/table/Table.tsx"));

const queryClient = new QueryClient();

const App = observer(() => {
    const { stateApp } = useContext(Context);

    return (
        <QueryClientProvider client={queryClient}>
            <Context.Provider value={{ stateApp }}>
                <Header />
                <Table />
                {stateApp.showWidget && <OpenWidget />}
                {stateApp.chooseWidget.state && <ChooseWidget />}
            </Context.Provider>
        </QueryClientProvider>
    );
});

export default App;
