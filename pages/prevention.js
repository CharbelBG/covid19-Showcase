import React from 'react';
import styles from '../styles/prevention.module.css';
import SectionHeader from '../src/components/SectionHeader';
import PreventionText from '../src/components/PreventionText';
import { LazyLoadImage } from 'react-lazy-load-image-component';
/**Each one will be devided into text and image. (swap locations here)
 * 
 * Create a text component (blueprint) and use it here.
 * 
 */

export default function prevention(){
    return(
        <div className={styles.prevention}>
            <SectionHeader title='What Should We Do'
            paragraph='Corona viruses are a type of virus. 
            There are many different kinds, and some cause disease.
             A newly identified type has caused'/>

            {/* add text and image in this div */}
                <div className={styles.textAndImg}>
                    <PreventionText number='01' 
                    title='Wear Masks'
                    paragraph='Continually seize impactful vortals rather than future-proof supply chains. 
                    Uniquely exploit emerging niches via fully tested meta-services. Competently pursue
                     standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. 
                     Objectively '/>

                    <LazyLoadImage src ='/illustration8.png' width={480} height={516}
                    placeholderSrc='/low/illustration8.avif' />
                </div>

                <div className={styles.textAndImg}>
                    <LazyLoadImage src ='/illustration9.png' width={480} height={516}
                    placeholderSrc='/low/illustration9.avif' />

                    <PreventionText number='02' 
                    title='Wash Your Hands'
                    paragraph='Continually seize impactful vortals 
                    rather than future-proof supply chains. Uniquely exploit emerging niches 
                    via fully tested meta-services. Competently pursue standards compliant 
                    leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively
                     Continually seize impactful vortals'/>
                </div>

                <div className={styles.textAndImg}>
                    <PreventionText number='03' 
                    title='Use Nose - Rag'
                    paragraph='Continually seize impactful vortals rather than future-proof supply chains. 
                    Uniquely exploit emerging niches via fully tested meta-services. Competently 
                    pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" 
                    thinking. Objectively '/>

                    <LazyLoadImage src ='/illustration10.png' width={480} height={516}
                    placeholderSrc='/low/illustration10.avif' />
                </div>

                <div className={styles.textAndImg}>
    
                    <LazyLoadImage src ='/illustration11.png' width={480} height={516}
                    placeholderSrc='/low/illustration11.avif' />

                    <PreventionText number='04' 
                    title='Avoid Contacts'
                    paragraph='Continually seize impactful vortals rather than 
                    future-proof supply chains. Uniquely exploit emerging niches via
                     fully tested meta-services. Competently pursue standards compliant
                      leadership skills vis-a-vis pandemic'/>
                </div>
                {/* adding the images in the background */}
                <LazyLoadImage className={styles.backgroundImg} src ='/background2.png' width={277} height={287}
                 placeholderSrc='/low/background2.avif' />
                  <LazyLoadImage className={styles.backgroundImg2} src ='/background3.png'
                 placeholderSrc='/low/background3.avif' />
        </div>
    )
}