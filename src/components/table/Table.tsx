import { FC } from "react";
import Column from "@/components/column/Column.tsx";
import styles from "./table.module.scss";

const Table: FC = () => {
    return (
        <div className={styles.table}>
            <Column column="first" />
            <Column column="second" />
            <Column column="third" />
        </div>
    );
};

export default Table;
