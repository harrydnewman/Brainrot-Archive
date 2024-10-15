import styles from "../styles/GridTest.module.css"

import GridTestItem from "../components/GridTestItem"
export default function GridTester(){
    return (

        <div className={styles.gridContainer}>
 <GridTestItem/>
 <GridTestItem/>
 <GridTestItem/>
        </div>       
    )
}