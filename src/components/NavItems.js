import React from 'react';
import {NavLinks} from '../utils/navdata';
import Link from 'next/link';
import styles from '../../styles/NavItems.module.css';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function NavItems(){
    const router = useRouter();
   
    const renderNavLinks = NavLinks.map((link,index)=>{
        return (
            <Link href ={link.path} key = {index}>
            <div  className={router.pathname === link.path ? (styles.active) : ''}>{link.name}</div>
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
            <button>Contact US</button>
            </div>
        </nav>
    )

}
