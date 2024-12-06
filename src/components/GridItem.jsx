import { useState, useEffect, useRef } from "react";
import styles from "../styles/GridTestItem.module.css";
import VideoPlayerElement from "./VideoPlayerElement";


export default function GridItem({ videoDataObject }) {
    const [isHovered, setIsHovered] = useState(false);
    const [adjustedWidth, setAdjustedWidth] = useState(750); // Adjust width if it exceeds screen width
    const [translateXValue, setTranslateXValue] = useState(0); // Handle translation dynamically

    
    const [description, setDescription] = useState("")
    const [descriptionSource, setDescriptionSource] = useState("")
    const [descriptionSourceLink, setDescriptionSourceLink] = useState("")
    const [videoSource, setVideoSource] = useState("")
    const [videoSourceLink, setVideoSourceLink] = useState("")
    const [username, setUsername] = useState("");
    
    const [title, setTitle] = useState("");
    const [descriptionObject, setDescriptionObject] = useState(null)
    const [sourceObject, setSourceObject] = useState(null);

    const gridItemRef = useRef(null);

    // const videoSrc = "http://46.101.219.105:6001/uploads/e003b0661da89917c44d67cc1713d568"
    
    // console.log(videoSrc)

    // set up these damn objects
    useEffect(() => {
        if (videoDataObject.title) {
            setTitle(videoDataObject.title);
        }
        if (videoDataObject.description) {
            setDescription(videoDataObject.description);
        }
        if (videoDataObject.descriptionSource) {
            setDescriptionSource(videoDataObject.descriptionSource);
            if (videoDataObject.descriptionSourceLink) {
                setDescriptionSourceLink(videoDataObject.descriptionSourceLink);
                setDescriptionObject(
                    <p>{videoDataObject.description} (<a href={videoDataObject.descriptionSourceLink}>{videoDataObject.descriptionSource}</a>)</p>
                );
            } else {
                setDescriptionObject(
                    <p>{videoDataObject.description} ({videoDataObject.descriptionSource})</p>
                );
            }
        } else {
            setDescriptionObject(<p>{videoDataObject.description}</p>);
        }
    
        if (videoDataObject.videoSource) {
            setVideoSource(videoDataObject.videoSource);
            if (videoDataObject.tiktokUsername) {
                setUsername(videoDataObject.tiktokUsername);
                if (videoDataObject.videoLink) {
                    setVideoSourceLink(videoDataObject.videoLink);
                    setSourceObject(
                        <p>Posted by <a href={videoDataObject.videoLink}>{videoDataObject.tiktokUsername}</a> on {videoDataObject.videoSource}</p>
                    );
                } else {
                    setSourceObject(
                        <p>Posted by {videoDataObject.tiktokUsername} on {videoDataObject.videoSource}</p>
                    );
                }
            }
        }
    }, [videoDataObject]);
    

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
            <div className={styles.squareDiv}>
                <VideoPlayerElement videoSrc={videoDataObject.videoSrc} />
            </div>
            <div className={styles.gridItemText}>
                <h2>{title}</h2>
                {descriptionObject}

                {sourceObject}
            </div>
        </div>
    );
}