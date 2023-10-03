import Header from 'components/Header'
import React from 'react'
import { CartProvider } from 'context/Cart';
import Product from 'components/Product';
import images from 'data/images.json'

export default function MainPage() {

    const productCompany = "SNEAKER COMPANY"
    const productName = "Fall Limited Edition Sneakers";
    const description = "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
    const price = "250.00"
    const discount = "50"

    return (
        <>
            <CartProvider>
                <Header />
                <Product
                    company={productCompany}
                    name={productName}
                    description={description}
                    originalPrice={price}
                    discount={discount}
                    images={images}
                />
            </CartProvider>
        </>
    )
}
