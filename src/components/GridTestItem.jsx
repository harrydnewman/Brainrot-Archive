import { useState, useRef } from "react";
import styles from "../styles/GridTestItem.module.css";

export default function GridTestItem() {
    const [bgColor, setBgColor] = useState("white");
    const [scale, setScale] = useState(1);
    const [margin, setMargin] = useState(0);
    const [infoWidth, setInfoWidth] = useState(250);
    const [zIndex, setZIndex] = useState(0);
    const timeoutIdRef = useRef(null);

    const handleMouseOver = () => {
        setBgColor("green");
        setScale(1.02);
        setMargin(10);
        setInfoWidth(750);
        setZIndex(20); // Set higher zIndex on hover

        timeoutIdRef.current = setTimeout(() => {
            console.log("hello");
        }, 400);
    };

    const handleMouseOut = () => {
        setBgColor("white");
        setScale(1);
        setMargin(0);
        setInfoWidth(250);
        setZIndex(0); // Reset zIndex when mouse leaves

        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
            timeoutIdRef.current = null;
        }
    };

    return (
        <div
            className={styles.gridInfoDiv}
            style={{
                width: `${infoWidth}px`,
                zIndex: zIndex, // Ensure z-index is applied
                position: 'relative',
                transition: 'width 0.8s ease',
            }}
        >
            <div
                className={styles.squareDiv}
                style={{
                    marginLeft: `${margin}px`,
                    backgroundColor: bgColor,
                    transform: `scale(${scale})`,
                    zIndex: zIndex, // Apply z-index to the child
                    transition: 'transform 0.4s ease, margin-left 0.4s ease',
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
            </div>
        </div>
    );
}
