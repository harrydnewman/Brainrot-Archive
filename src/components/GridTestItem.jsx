import { useState, useEffect, useRef } from "react";
import styles from "../styles/GridTestItem.module.css";

export default function GridTestItem() {
    const [isHovered, setIsHovered] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);  // If true, expand to the left
    const gridItemRef = useRef(null);

    useEffect(() => {
        if (isHovered && gridItemRef.current) {
            // Get the bounding box of the hovered grid item
            const rect = gridItemRef.current.getBoundingClientRect();
            
            // Calculate the distances from both edges
            const distanceFromLeftEdge = rect.left;
            const distanceFromRightEdge = window.innerWidth - rect.left;

            // Log the distances for debugging purposes
            console.log("Distance from left edge to element left:", distanceFromLeftEdge);
            console.log("Distance from right edge to element left:", distanceFromRightEdge);
            console.log("Window inner width:", window.innerWidth);

            // Decide whether to expand left or right based on the distances
            if (distanceFromRightEdge > distanceFromLeftEdge) {
                // Expand to the right (enough space on the right)
                setMoveLeft(false);
            } else {
                // Expand to the left (not enough space on the right)
                setMoveLeft(true);
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
