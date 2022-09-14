import React from 'react';
import styles from '../../styles/footer.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import { NavLinks } from '../utils/navdata';
export default function Footer(){
    const renderNavLinks = NavLinks.map((link,index)=>{
        return (
            <Link href ={link.path} key={index}>
            <span>{link.name}</span>
            </Link>
        )
    })
    return(
    <div className={styles.footerWrapper}>  
      
        <div className={styles.footer}>
           <div className={styles.imageWrapper}>
               Covid-19
            </div>
           <div className={styles.links}>
               <div>
                {renderNavLinks}
               </div>
               <div>
                  <p>2020 @ All right reseved by pixelspark.co</p>
               </div>
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
        
    </div>
    )
} 