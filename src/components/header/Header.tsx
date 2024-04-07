import { FC } from "react";
import styles from "./header.module.scss";
const Header: FC = () => {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>widgetV</h1>
                <a
                    href="https://t.me/vlad1sat"
                    target="_blank"
                    className={styles.info}
                >
                    tg: @vladisat
                </a>
            </header>
        </>
    );
};

export { Header };
