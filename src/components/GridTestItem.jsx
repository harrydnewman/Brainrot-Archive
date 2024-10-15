import { useState, useEffect, useRef } from "react";
import styles from "../styles/GridTestItem.module.css";

export default function GridTestItem() {
    const [isHovered, setIsHovered] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const gridItemRef = useRef(null);

    useEffect(() => {
        if (isHovered && gridItemRef.current) {
            // Get the bounding box of the hovered grid item
            const rect = gridItemRef.current.getBoundingClientRect();
            // Check if the right edge of the item is going off-screen
            const isOffScreen = rect.right + 500 > window.innerWidth; // 500 is the expanded width difference
            console.log("Rect left:",rect.left)
            console.log("Rect right:", rect.right)
            console.log("Window inner width:",window.innerWidth)
            

            // If the element is too close to the right edge, move it to the left
            if (isOffScreen) {
                setMoveLeft(true);
            } else {
                setMoveLeft(false);
            }
        }
    }, [isHovered]);

    return (
        <div
            ref={gridItemRef}
            className={`${styles.gridInfoDiv} ${isHovered ? styles.hovered : ''} ${moveLeft ? styles.moveLeft : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}  // Reset hover state on mouse leave
        >
            <div className={styles.squareDiv}></div>
        </div>
    );
}
