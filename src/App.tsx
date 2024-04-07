import { Header } from "@/components/header/Header.tsx";
import { lazy } from "react";
const Table = lazy(() => import("@/components/table/Table.tsx"));

const App = () => {
    return (
        <>
            <Header />
            <Table />
        </>
    );
};

export default App;
