import styles from './Header.module.css'
import React from 'react'
import Nav from 'components/Nav'
import avatarImage from 'assets/image-avatar.png'
import CartIcon from 'components/CartIcon'

export default function Header() {
    return (
        <header className={styles.header}>
            <Nav />
            <div className={styles.right_container}>
                <CartIcon />
                <img className={styles.avatar} src={avatarImage} alt="Profile" />
            </div>
        </header>
    )
}
