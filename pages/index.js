import React from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Covid19 Project</title>
        <meta name="description" content="Spreading Covid-19 awareness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.text}>
        <h2>COVID-19 Alert</h2>
        <h1>Stay At Home Quarantine To Stop Corona Virus</h1>
        <p>
          There is No Specific Medicine To Prevent Or Treat Coronavirus 
          Disease (COVID-19). People May Need Supportive Care To.
        </p>

        <button>Let Us Help</button>
        </div>

        <div className={styles.imageSection}> 
          <LazyLoadImage src = '/illustration1.png' width={880} height={607}
         placeholderSrc='/low/illustration1.avif'
         alt="Image alt"/>
        </div>
      </div>
    
      <div className={styles.about}>
          <div className={styles.aboutImage}>
            <LazyLoadImage src = '/illustration2.png' width={400} height={427} 
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
    </div>
  )
}