import React from "react";
import styles from '../../app/pages.module.css'

export default function About(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>About Page</h2>
            <p className={styles.description}>
            Hello BFH
            </p>
        </div>
    )
}