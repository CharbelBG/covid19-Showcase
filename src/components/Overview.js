import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../../styles/home.module.css';

export default function Overview(){
    return(
        <div className={styles.main}>
        <div className={styles.text}>
        <h3>COVID-19 Alert</h3>
        <h1>Stay At Home Quarantine <br /> To Stop Corona Virus</h1>
        <p>
          There is No Specific Medicine To Prevent Or Treat Coronavirus <br />
          Disease (COVID-19). People May Need Supportive Care To.
        </p>

        <button>Let Us Help</button>
        </div>

        <div className={styles.imageSection}> 
          <LazyLoadImage src = '/illustration1.png' 
         placeholderSrc='/low/illustration1.avif'
         alt="Image alt"/>
        </div>
      </div>
    
    )
}