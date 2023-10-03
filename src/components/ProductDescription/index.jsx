import styles from './ProductDescription.module.css'
import React, { useEffect } from 'react'

export default function ProductDescription({ company, name, description, originalPrice, finalPrice, setFinalPrice, discount = 0 }) {

    useEffect(() => {
        setFinalPrice(parseFloat(originalPrice) - (parseFloat(originalPrice)*(parseFloat(discount) / 100)))
    }, [setFinalPrice, discount, originalPrice])
    
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{company}</h2>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.container_prices}>
                <h1 className={styles.price}>${finalPrice?.toFixed(2)}</h1>
                <div className={styles.container_discount} style={{display: discount !== 0 ? 'flex' : 'none' }}>
                    <h3 className={styles.discount}>{discount}%</h3>
                    <h4 className={styles.original_price}>${originalPrice}</h4>
                </div>
            </div>
        </section>
    )
}
