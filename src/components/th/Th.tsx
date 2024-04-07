import { FC } from "react";
import styles from "./th.module.scss";

interface ITh {
    title: string;
}

const Th: FC<ITh> = ({ title }) => {
    return (
        <th>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.btn}>
                <button type="button" className="btn btn-outline-primary">
                    add widget
                </button>
            </div>
        </th>
    );
};

export default Th;
