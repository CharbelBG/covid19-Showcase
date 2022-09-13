import React from 'react';
import styles from '../../styles/prevention.module.css';
import SectionHeader from './SectionHeader';
import PreventionText from './PreventionText';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function prevention(){
    return(
        <div className={styles.prevention}>
            <SectionHeader title='What Should We Do'
            paragraph={['Corona viruses are a type of virus. There are many different kinds, and some cause',<br />,'disease. A newly identified type has caused']} />
                <div className={styles.textAndImg}>
                    <PreventionText number='01' 
                    title='Wear Masks'
                    paragraph='Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively' />
                    
                    <div className={styles.image}>
                        <LazyLoadImage src ='/illustration8.png' 
                        placeholderSrc='/low/illustration8.avif' />
                    </div>
                </div>

                <div className={styles.textAndImg}>
                    <div className={styles.image}>
                    <LazyLoadImage src ='/illustration9.png'  
                    placeholderSrc='/low/illustration9.avif' />
                    </div>

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
                    <div className={styles.image}>
                        <LazyLoadImage src ='/illustration10.png'  
                        placeholderSrc='/low/illustration10.avif' />
                    </div>
                </div>

                <div className={styles.textAndImg}>
                    {/* width={480} height={516} */}
                    <div className={styles.image}>
                        <LazyLoadImage src ='/illustration11.png' 
                        placeholderSrc='/low/illustration11.avif' />
                    </div>

                    <PreventionText number='04' 
                    title='Avoid Contacts'
                    paragraph='Continually seize impactful vortals rather than 
                    future-proof supply chains. Uniquely exploit emerging niches via
                     fully tested meta-services. Competently pursue standards compliant
                      leadership skills vis-a-vis pandemic'/>
                </div>
                
                <div className={styles.backgroundImgWrapper}>
                    <LazyLoadImage className={styles.backgroundImg} src ='/background2.png' 
                    placeholderSrc='/low/background2.avif' />
                 </div>

                  <LazyLoadImage className={styles.backgroundImg2} src ='/background3.png'
                 placeholderSrc='/low/background3.avif' />
        </div>
    )
}