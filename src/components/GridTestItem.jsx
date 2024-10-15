import { useState, useEffect, useRef } from "react";
import styles from "../styles/GridTestItem.module.css";

export default function GridTestItem() {
    const [isHovered, setIsHovered] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);  // If true, expand to the left
    const [adjustedWidth, setAdjustedWidth] = useState(750);  // Adjust width if it exceeds screen width
    const [translateXValue, setTranslateXValue] = useState(0); // Handle translation dynamically
    const gridItemRef = useRef(null);

    useEffect(() => {
        if (isHovered && gridItemRef.current) {
            const rect = gridItemRef.current.getBoundingClientRect();
            
            // Get the available space to the right and left
            const distanceFromLeftEdge = rect.left;
            const distanceFromRightEdge = window.innerWidth - rect.right;

            // Calculate the maximum available width (viewport width - 60px padding)
            const maxAvailableWidth = window.innerWidth - 60;

            // Determine the actual expansion width (min between 750px and the max available space)
            const newWidth = Math.min(750, maxAvailableWidth);

            // Set the adjusted width based on the available space
            setAdjustedWidth(newWidth);

            // Decide if we should expand to the left or right
            if (distanceFromRightEdge >= newWidth) {
                // Enough space on the right, expand to the right
                setMoveLeft(false);
                setTranslateXValue(0);
            } else if (distanceFromLeftEdge >= newWidth) {
                // Not enough space on the right, but enough on the left, expand to the left
                setMoveLeft(true);
                setTranslateXValue(-(newWidth - 250));
            } else {
                // Not enough space on either side, cap width to the available space and expand left if necessary
                setMoveLeft(distanceFromRightEdge < distanceFromLeftEdge);
                const shiftValue = distanceFromRightEdge < distanceFromLeftEdge ? -(newWidth - 250) : 0;
                setTranslateXValue(shiftValue);
            }
        } else {
            // Reset the translateX when hover is removed
            setTranslateXValue(0);
            setAdjustedWidth(250); // Reset width to default
        }
    }, [isHovered]);

    return (
        <div
            ref={gridItemRef}
            className={`${styles.gridInfoDiv} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}  // Reset hover state on mouse leave
            style={{
                width: isHovered ? `${adjustedWidth}px` : '250px',
                transform: `translateX(${translateXValue}px)`,  // Reset translateX dynamically
            }}  // Dynamically set width and position
        >
            <div className={styles.squareDiv}></div>
        </div>
    );
}
