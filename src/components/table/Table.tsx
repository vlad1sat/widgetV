import { FC } from "react";
import Th from "@/components/th/Th.tsx";
import BodyWidgets from "@/components/bodyWidgets/BodyWidgets.tsx";
import styles from "./table.module.scss";

const Table: FC = () => {
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                    <Th title="first" />
                    <Th title="second" />
                    <Th title="third" />
                </tr>
            </thead>
            <BodyWidgets />
        </table>
    );
};

export default Table;
