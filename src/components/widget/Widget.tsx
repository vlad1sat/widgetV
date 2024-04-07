import styles from "./widget.module.scss";
import { FC } from "react";

interface IWidget {
    title: string;
    content: string;
}

const Widget: FC<IWidget> = ({ title, content }) => {
    return (
        <>
            <td className={styles.sizeTd}>
                <div className={styles.widget}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.content}>{content}</p>
                    <div className={styles.btnDelete}>
                        <button
                            type="button"
                            className="btn btn-danger float-end"
                        >
                            delete
                        </button>
                    </div>
                </div>
            </td>
        </>
    );
};

export default Widget;
