import React from 'react';
import styles from '../../styles/contact.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
export default function Contact(){
    return(
       <div className={styles.wrapper}>
        <div className={styles.contact}>
          <h1>Have a Question in mind? <br />Let us help you</h1>
          <div className={styles.inputContainer}>
          <input type="email" placeholder='snmonydemo@gmail.com'/>
          <Link href='/hello'><button>Send</button></Link>
          </div>
        </div>
            <div className={styles.imgWrapper}>
             <LazyLoadImage src = '/background4.png'
              placeholderSrc='/low/background4.avif'
              alt="Logo"/>
            </div>
       </div> 
    )
}