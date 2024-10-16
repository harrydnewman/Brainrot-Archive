import { useState, useEffect, useRef } from "react";
import styles from "../styles/GridTestItem.module.css";

export default function GridItem() {
    const [isHovered, setIsHovered] = useState(false);
    const [adjustedWidth, setAdjustedWidth] = useState(750); // Adjust width if it exceeds screen width
    const [translateXValue, setTranslateXValue] = useState(0); // Handle translation dynamically
    const gridItemRef = useRef(null);

    useEffect(() => {
        if (isHovered && gridItemRef.current) {
            const rect = gridItemRef.current.getBoundingClientRect();

            // Calculate the maximum available width (viewport width - 60px padding)
            const maxAvailableWidth = window.innerWidth - 60;
            const newWidth = Math.min(750, maxAvailableWidth);
            setAdjustedWidth(newWidth);

            let translateX = 0;

            // Desired positions after expansion
            let desiredLeft = rect.left;
            let desiredRight = rect.left + newWidth;

            // Adjust translateX to keep the component within the viewport
            if (desiredRight > window.innerWidth) {
                translateX -= (desiredRight - window.innerWidth) +30;
            }
            if (desiredLeft + translateX < 0) {
                translateX += -(desiredLeft + translateX);
            }

            setTranslateXValue(translateX);
        } else {
            // Reset when not hovered
            setTranslateXValue(0);
            setAdjustedWidth(250); // Reset width to default
        }
    }, [isHovered]);

    return (
        <div
            ref={gridItemRef}
            className={`${styles.gridInfoDiv} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                width: isHovered ? `${adjustedWidth}px` : '250px',
                transform: `translateX(${translateXValue}px)`,
            }}
        >
            <div className={styles.squareDiv}></div>
            <div className={styles.gridItemText}>
                <h2>Video Title</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    );
}