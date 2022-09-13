import React from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Overview from '../src/components/Overview';
import About from '../src/components/About';
import Contagion from '../src/components/Contagion';
import Symptoms from '../src/components/Symptoms';
import Prevention from '../src/components/Prevention';

export default function Home(){
  return (
    <div>
      <Head>
        <title>Covid19 Project</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Spreading Covid-19 awareness" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='keywords' content='covid-19, virus, awareness against covid-19, symptoms' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* need to be spreaded out as components. */}
      <Overview />
      <About />
      <Contagion />
      <Symptoms />
      <Prevention />
      {/* add here the contact */}
    </div>
  )}