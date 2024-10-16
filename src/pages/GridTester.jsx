import styles from "../styles/GridTest.module.css"

import GridItem from "../components/GridItem"
export default function Grid(){
    return (
        <div className={styles.mainDiv}>
        <div className={styles.gridContainer}>
 <GridTestItem/>
 <GridTestItem/>
 <GridTestItem/>
 <GridTestItem/>
 <GridTestItem/>
 <GridTestItem/>
        </div>     
        </div>  
    )
}