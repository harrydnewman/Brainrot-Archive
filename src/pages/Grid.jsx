import styles from "../styles/GridTest.module.css"
import GridItem from "../components/GridItem"
import { useEffect, useState } from 'react';

export default function Grid() {
    const [videoData, setVideoData] = useState(null);
    const [dataLength, setDataLength] = useState(0);
    const fetchVideos = async () => {
        try {
            const response = await fetch("https://api.brainrot.harrydnewman.com/api/grid");
            let videoData = await response.json();
            console.log("Fetched video data:", videoData)
            setVideoData(videoData)
            setDataLength(videoData.length)
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    }
    useEffect(() => {
        console.log("Page has loaded"); 
        fetchVideos();
    }, []); // Empty dependency array ensures this effect runs only once on page load

    useEffect(() => {
        if (videoData) {
            console.log("Updated video data:", videoData);
        }
    }, [videoData]); // Only run when videoData changes

    const gridItems = [];
    for (let i = 0; i < dataLength; i++) {
        gridItems.push(<GridItem key={i} videoDataObject={videoData[i]}/>); // Use a unique key for each item
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.gridContainer}>
            {gridItems}
            </div>
        </div>
    )
}