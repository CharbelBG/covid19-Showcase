import React from 'react';
import {NavLinks} from '../utils/navdata';
import Link from 'next/link';
import styles from '../../styles/NavItems.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function NavItems(){
 
   
    const renderNavLinks = NavLinks.map((link,index)=>{
        return (
            <Link href ={link.path} key={index}>
            <div>{link.name}</div>
            </Link>
        )
    })
    
    return(
        <nav className={styles.nav}>
            <LazyLoadImage src = '/Logo.png'
            placeholderSrc='/low/Logo.avif'
            alt="Image alt"/>
            <div className={styles.navItems}>
            {renderNavLinks}
            <Link href='#contact'><button>Contact</button></Link>
            
            </div>
        </nav>
    )

}
