import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../../styles/home.module.css';
export default function About(){
    return(
        <div className={styles.about}>
          <div className={styles.aboutImage}>
            <LazyLoadImage src = '/illustration2.png' 
             placeholderSrc='/low/illustration2.avif'
             alt="Image alt"/>
            </div>
          
          <div className={styles.aboutText}>
            <h3>What is Covid-19</h3>
            <h1>Coronavirus</h1>
            <p>Corona viruses are a type of virus. There are many different kinds, 
              and some cause disease. A newly identified type has caused a recent 
              outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., 
              the director of operations with the Johns Hopkins Office of Critical Event 
              Preparedness and Response</p>
              <button>Learn More</button>
          </div>
      </div>

    )
}
