import React from 'react';
import {NavLinks} from '../utils/navdata';
import Link from 'next/link';
import styles from '../../styles/NavItems.module.css';
import { useRouter } from 'next/router';


export default function NavItems(){
    const router = useRouter();
   
    const renderNavLinks = NavLinks.map((link,index)=>{
        return (
            <Link href ={link.path}>
            <div key = {index} className={router.pathname === link.path ? (styles.active) : ''}>{link.name}</div>
            </Link>
        )
    })

    return(
        <nav className={styles.nav}>
            <img src='/Logo.svg' />
            <div className={styles.navItems}>
            {renderNavLinks}
            <button>Contact US</button>
            </div>
        </nav>
    )

}
