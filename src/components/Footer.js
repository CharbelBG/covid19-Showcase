import React from 'react';
import styles from '../../styles/footer.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Footer(){
    //devided into 3 parts 
    return(
    <div className={styles.footerWrapper}>  
      
        <div className={styles.footer}>
           <div>
                <LazyLoadImage src = '/Logo.png'
                placeholderSrc='/low/Logo.avif'
                alt="Logo"/>
            </div>
           <div className={styles.links}>
                <span>Overview</span>
                <span>Symptoms</span>
                <span>Prevention</span>
                <span>Treatment</span>
           </div>
           <div className={styles.social}>
                <LazyLoadImage src = '/f.png'
                placeholderSrc='/low/f.avif'
                alt="f"/>

                <LazyLoadImage src = '/youtube.png'
                placeholderSrc='/low/youtube.avif'
                alt="youtube"/>

                <LazyLoadImage src = '/v.png'
                placeholderSrc='/low/v.avif'
                alt="v"/>

                <LazyLoadImage src = '/twitter.png'
                placeholderSrc='/low/twitter.avif'
                alt="twitter"/>
           </div>
        </div>
           <p>2020 @ All right reseved by pixelspark.co</p>
    </div>
    )
} 