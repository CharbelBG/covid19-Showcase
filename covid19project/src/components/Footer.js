import React from 'react';
import styles from '../../styles/footer.module.css';
export default function Footer(){
    //devided into 3 parts 
    return(
    <div className={styles.footerWrapper}>  
      
        <div className={styles.footer}>
           <div><img src='/Logo.svg' /></div>
           <div className={styles.links}>
                <span>Overview</span>
                <span>Symptoms</span>
                <span>Prevention</span>
                <span>Treatment</span>
           </div>
           <div className={styles.social}>
            <img src="/f.svg" />
            <img src="/youtube.png" />
            <img src="/v.svg" />
            <img src="/twitter.svg" />
           </div>
        </div>
           <p>2020 @ All right reseved by pixelspark.co</p>
    </div>
    )
} 