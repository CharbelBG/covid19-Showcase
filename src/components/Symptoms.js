import React from 'react';
import SectionHeader from './SectionHeader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../../styles/symptoms.module.css';
export default function symptoms(){
    return(
        <div>
            <SectionHeader title='Symptoms'
            paragraph={['Corona viruses are a type of virus. There are many different kinds, and some cause disease.',<br />,'A Newly Identified Type Has Caused A Recent Outbreak Of Respiratory']}/>
            <div className={styles.mainImage}>
                <LazyLoadImage src = '/illustration7.png'
                placeholderSrc='/low/illustration7.avif'
                alt="Image alt"/>
            </div>
        </div>
    )
}