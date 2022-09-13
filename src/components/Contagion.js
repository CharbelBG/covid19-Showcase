import React from 'react';
import styles from '../../styles/contagion.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SectionHeader from './SectionHeader';

export default function contagion(){
    return(
        <div>
            <SectionHeader title='Contagion'
             paragraph= {['Corona viruses are a type of virus. There are many different kinds, and'
             , <br />,'some cause disease. A newly identified type' ]} />
            <div className={styles.cardsWrapper}>
                <div className={styles.card}>
                <LazyLoadImage src = '/illustration4.png' width={269.5} height={256}
                    placeholderSrc='/low/illustration4.avif' />
                    <h2>Air Transmission</h2>
                    <p>
                        Objectively evolve tactical expertise before extensible initiatives. 
                        Efficiently simplify
                    </p>
                </div>

                <div className={styles.card}>
                    <LazyLoadImage src = '/illustration5.png' width={269.5} height={256}
                    placeholderSrc='/low/illustration5.avif' />
                     <h2>Human Contacts</h2>
                    <p>
                    Washing your hands is one of the simplest ways you can protect
                    </p>
                </div>

                <div className={styles.card}>
                    <LazyLoadImage src = '/illustration6.png' width={269.5} height={256}
                    placeholderSrc='/low/illustration6.avif' />
                    <h2>Contained Objects</h2>
                    <p>
                    Use the tissue while sneezing,In this way, you can protect your droplets.
                    </p>
                </div>
            
            <LazyLoadImage className={styles.background} src = '/background.png' width={250} height={250}
             placeholderSrc='/low/background.avif' />
             </div>

        </div>
    )
}