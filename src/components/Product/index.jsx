import LightBoxGallery from 'components/LightBoxGallery'
import styles from './Product.module.css'
import MySwiper from 'components/MySwiper'
import ProductDescription from 'components/ProductDescription'
import ProductQuantityControls from 'components/ProductQuantityControls'
import React, { useState } from 'react'
import useWindowDimensions from 'utils/WindowDimensions'

export default function Product({ company, name, description, originalPrice, discount, images }) {

    const [finalPrice, setFinalPrice] = useState(0)
    const { width } = useWindowDimensions()
    
    return (
        <main className={styles.main_container}>
            {width < 761 ? <MySwiper images={images} /> : <LightBoxGallery images={images} />}
            <div className={styles.product_container}>
                <ProductDescription
                    company={company}
                    name={name}
                    description={description}
                    originalPrice={originalPrice}
                    finalPrice={finalPrice}
                    setFinalPrice={setFinalPrice}
                    discount={discount}
                />
                <ProductQuantityControls
                    productName={name}
                    imageUrl={images[0].thumbnail}
                    price={finalPrice}
                />
            </div>
        </main>
    )
}
