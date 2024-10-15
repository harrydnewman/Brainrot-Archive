import { useState } from "react";
import styles from "../styles/GridTestItem.module.css";

export default function GridTestItem() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${styles.gridInfoDiv} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.squareDiv}></div>
        </div>
    );
}
