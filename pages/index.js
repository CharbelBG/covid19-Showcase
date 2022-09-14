import React from 'react';
import Head from 'next/head';


import Overview from '../src/components/Overview';
import About from '../src/components/About';
import Contagion from '../src/components/Contagion';
import Symptoms from '../src/components/Symptoms';
import Prevention from '../src/components/Prevention';
import Contact from '../src/components/Contact';
export default function Home(){
  return (
    <div>
      <Head>
        <title>Covid19 Project</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Spreading Covid-19 awareness" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='keywords' content='covid19, virus, awareness against covid19, symptoms' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Overview />
      </section>
      <section id='overview'>
        <About />
      </section>
      <section id='contagion'>
        <Contagion />
      </section>
      <section id='symtoms'>
        <Symptoms />
      </section>
      <section id='prevention'>
        <Prevention />
      </section>
      <section id = 'contact'>
        <Contact />
      </section>
    </div>
  )}