import { FC } from "react";
import Column from "@/components/th/Column.tsx";
import styles from "./table.module.scss";

const Table: FC = () => {
    return (
        <div className={styles.table}>
            <Column title="first" />
            <Column title="second" />
            <Column title="third" />
        </div>
    );
};

export default Table;
