import styles from '../styles/VideoPlayerElement.module.css'

export default function VideoPlayerElement({ videoSrc }) {
    return (
        <video className={styles.videoPlayer} controls autoPlay loop src={videoSrc} ></video>
    )


}