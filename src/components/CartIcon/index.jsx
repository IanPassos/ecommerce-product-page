import styles from './CartIcon.module.css'
import { ReactComponent as Cart } from 'assets/icon-cart.svg'
import React, { useState } from 'react'
import { useCartContext } from 'context/Cart'
import CartMenu from 'components/CartMenu'

export default function CartIcon() {

    const [cartMenuOpen, setCartMenuOpen] = useState(false)
    const { totalQuantity } = useCartContext()

    const toggleCartMenu = () => {
        setCartMenuOpen(!cartMenuOpen)
    }

    return (
        <div className={styles.cart_container}>
            <button className={styles.cart} onClick={toggleCartMenu} >
                <Cart className={styles.cart_icon} style={{ fill: totalQuantity !== 0 ? 'black' : '' }} />
                {totalQuantity > 0 && (
                    <span className={styles.badge}>{totalQuantity}</span>
                )}
            </button>
            <CartMenu isOpen={cartMenuOpen} />
        </div>
    )
}
