import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../../styles/symptoms.module.css';
export default function symptoms(){
    return(
        <div>
            <div className='sectionHeader'>
                <h3>Covid-19</h3>
                <h1>Symptoms</h1>
                <p>Corona viruses are a type of virus. 
                    There are many different kinds, and some cause disease.<br/>
                     A newly identified type has caused a recent outbreak of respiratory </p>
            </div>

             <div className={styles.mainImage}>
                <LazyLoadImage src = '/illustration7.png'
                placeholderSrc='/low/illustration7.avif'
                alt="Image alt"/>
            </div>
        </div>
    )
}