import React from 'react';
import styles from '../styles/hello.module.css';
import Link from 'next/link';
export default function hello(){
    return(
        <div className={styles.helloWrapper}>
            <div className={styles.text}>
            <h1>Thank You!</h1>
            <p>Your From Submission has been received!</p> <br />
            <Link href='/#overview'>← Go back to our site</Link>
            </div>
        </div>    
    )
}