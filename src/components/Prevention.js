import React from 'react';
import styles from '../../styles/prevention.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Prevention(){
    return(
        <div className={styles.prevention} >
             <div className='sectionHeader'>
                <h3>Covid-19</h3>
                <h1>What Should We Do</h1>
                <p>Corona viruses are a type of virus. There are many different kinds, and some cause 
                    <br /> disease. A newly identified type has caused</p>
             </div>

                    <div className={styles.textAndImg}>
                        <div className='preventionText'>
                        <div className='titleAndNumber'>
                        <h1 data-before='01'>Wear Masks</h1>
                        </div>
                        <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</p>
                    </div>

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
            

                     <div className='preventionText'>
                        <div className='titleAndNumber'>
                        <h1 data-before='02'>Wash Your Hands</h1>
                        </div>
                        <p>Continually seize impactful vortals 
                        rather than future-proof supply chains. Uniquely exploit emerging niches 
                        via fully tested meta-services. Competently pursue standards compliant 
                        leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively
                        Continually seize impactful vortals</p>
                    </div>


                </div>

                <div className={styles.textAndImg}>


                    <div className='preventionText'>
                        <div className='titleAndNumber'>
                        <h1 data-before='03'>Use Nose - Rag</h1>
                        </div>
                        <p>Continually seize impactful vortals rather than future-proof supply chains. 
                        Uniquely exploit emerging niches via fully tested meta-services. Competently 
                        pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" 
                        thinking. Objectively</p>
                    </div>


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

                      <div className='preventionText'>
                        <div className='titleAndNumber'>
                        <h1 data-before='04'>Avoid Contacts</h1>
                        </div>
                        <p>Continually seize impactful vortals rather than 
                         future-proof supply chains. Uniquely exploit emerging niches via
                         fully tested meta-services. Competently pursue standards compliant
                         leadership skills vis-a-vis pandemic</p>
                    </div>

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