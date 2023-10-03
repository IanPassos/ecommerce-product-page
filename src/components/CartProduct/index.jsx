import styles from './CartProduct.module.css'
import React from 'react'
import { ReactComponent as IconDelete} from './icon-delete.svg'
import { useCartContext } from 'context/Cart'

export default function CartProduct({ imageUrl, productName, price, quantity }) {

    const { removeFromCart } = useCartContext()
    
    return (
        <div className={styles.container}>
            <img className={styles.thumbnail} src={imageUrl} alt="Sneaker 1" />
            <div className={styles.description_container}>
                <span className={styles.title}>{productName}</span>
                <span>${price.toFixed(2)} x {quantity} <span className={styles.bold}>${(price * quantity).toFixed(2)}</span></span>
            </div>
            <IconDelete className={styles.icon_delete} onClick={() => removeFromCart(productName)} />
        </div>
    )
}
