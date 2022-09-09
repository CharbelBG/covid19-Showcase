import React from 'react';
import styles from '../../styles/preventionText.module.css';

export default function PreventionText(props){

    return(
        <div className={styles.preventionText}>
           <h1 data-before={props.number}>{props.title}</h1>
           <p>{props.paragraph}</p>
        </div>
    )
}