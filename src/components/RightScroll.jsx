import styles from '../styles/RightScroll.module.css'

export default function RightScroll({videoData}) {
    if (videoData){
        // console.log(videoData);
        return (

            

            <div className={styles.rightScrollContainer}>

            <h1>{videoData.title}</h1>
            <p>{videoData.description} (<a href={videoData.descriptionSourceLink}>{videoData.descriptionSource}</a>)</p>
            </div>
        )
    }    
}