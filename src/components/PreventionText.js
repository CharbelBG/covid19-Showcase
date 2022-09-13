import React from 'react';
import styles from '../../styles/preventionText.module.css';

export default function PreventionText(props){

    return(
        <div className={styles.preventionText}>
            <div className={styles.titleAndNumber}>
            <h1 data-before={props.number}>{props.title}</h1>
            </div>
           <p>{props.paragraph}</p>
        </div>
    )
}