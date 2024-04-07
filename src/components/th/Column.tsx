import { FC, useContext } from "react";
import styles from "./th.module.scss";
import IAllWidgets from "@/interfaces/IAllWidgets.ts";
import { Context } from "@/context/context.ts";
import TimeWidget from "@/components/widgets/timeWidget/TimeWidget.tsx";
import { observer } from "mobx-react-lite";

interface IColumn {
    title: keyof IAllWidgets;
}

const Column: FC<IColumn> = observer(({ title }) => {
    const { stateApp } = useContext(Context);
    return (
        <div className={styles.column}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.btn}>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        const id = String(Date.now());
                        stateApp.addWidget(
                            title,
                            <TimeWidget key={id} id={id} column={title} />,
                        );
                    }}
                >
                    add widget
                </button>
            </div>
            {stateApp.allWidget[title].map((el) => el)}
        </div>
    );
});

export default Column;
