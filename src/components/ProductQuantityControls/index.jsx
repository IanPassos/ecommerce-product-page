import styles from './ProductQuantityControls.module.css'
import React, { useState } from 'react'
import iconMinus from './icon-minus.svg'
import iconPlus from './icon-plus.svg'
import { ReactComponent as CartIcon } from 'assets/icon-cart.svg'
import { useCartContext } from 'context/Cart'

export default function ProductQuantityControls({ imageUrl, productName, price }) {

    const { addToCart } = useCartContext()
    const [quantity, setQuantity] = useState(0)
    
    return (
        <div className={styles.container}>
            <div className={styles.controls_container}>
                <img
                    className={styles.quantity_button}
                    onClick={() => { if (quantity > 0) setQuantity(quantity - 1) }}
                    src={iconMinus}
                    alt="Remove product"
                />
                <span className={styles.quantity}>{quantity}</span>
                <img
                    className={styles.quantity_button}
                    onClick={() => { setQuantity(quantity + 1) }}
                    src={iconPlus}
                    alt="Add product"
                />
            </div>
            <button
                className={styles.cart_button}
                onClick={() => {
                    if (quantity > 0) {
                        addToCart({ imageUrl, productName, price, quantity })
                        setQuantity(0)
                    }
                }}>
                <CartIcon className={styles.cart_icon} />
                Add to cart
            </button>
        </div>
    )
}
