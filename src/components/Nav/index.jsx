import HamburgerMenu from 'components/HamburgerMenu'
import styles from './Nav.module.css'
import logo from 'assets/logo.svg'
import React, { useState } from 'react'
import useWindowDimensions from 'utils/WindowDimensions'

export default function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const { width } = useWindowDimensions()

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <>
            <div className={styles.hamburger} onClick={toggleHamburger}>
                <HamburgerMenu isOpen={hamburgerOpen} />
            </div>

            <img className={styles.logo} src={logo} alt="Logo Sneakers" />

            <div className={styles.menu} style={{ display: width <= 760 ? (hamburgerOpen ? 'flex' : 'none') : '' }}>
                <ul className={styles.list}>
                    <li className={styles.list_item}>Collections</li>
                    <li className={styles.list_item}>Men</li>
                    <li className={styles.list_item}>Women</li>
                    <li className={styles.list_item}>About</li>
                    <li className={styles.list_item}>Contact</li>
                </ul>
            </div>
        </>
    )
}
