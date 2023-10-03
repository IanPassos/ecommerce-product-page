import { useCartContext } from 'context/Cart'
import styles from './CartMenu.module.css'
import React from 'react'
import CartProduct from 'components/CartProduct'

export default function CartMenu({ isOpen }) {

    const { cart } = useCartContext()

    return (
        <div className={`${styles.cart_menu} ${isOpen ? styles.is_open : ''}`} >
            <h3 className={styles.title}>Cart</h3>
            {cart.length !== 0 ? (<div className={styles.cart_container}>
                {cart.map(cartItem => <CartProduct
                imageUrl={cartItem.imageUrl}
                productName={cartItem.productName}
                price={cartItem.price}
                quantity={cartItem.quantity}
                key={cartItem.productName}
            />)}
            <button className={styles.checkout_button}>Checkout</button>
            </div> ) : <div className={styles.centered_span}><span className={styles.empty_cart}>Your cart is empty.</span></div>}
        </div>
    )
}
