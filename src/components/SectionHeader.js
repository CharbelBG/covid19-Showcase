import React from 'react';
import styles from '../../styles/sectionHeader.module.css';


export default function Header(props){
    return(
        <div className={styles.sectionHeader}>
            <h3>Covid-19</h3>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </div>
        ) 
    }