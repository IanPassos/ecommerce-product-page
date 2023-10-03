import styles from './HamburgerMenu.module.css'
import React from 'react'

export default function HamburgerMenu({ isOpen }) {


    return (
        <>
            <div className={`${styles.hamburger} ${isOpen ? styles.is_open : ''}`} ></div>
        </>
    )
}
