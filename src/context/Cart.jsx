import { createContext, useContext, useEffect, useState } from "react";


export const CartContext = createContext();
CartContext.displayName = "Cart"

export const CartProvider = ({ children }) => {

    const [totalQuantity, setTotalQuantity] = useState(0)
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={{ totalQuantity, setTotalQuantity, cart, setCart }} >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const { totalQuantity, setTotalQuantity, cart, setCart } = useContext(CartContext)

    function addToCart(newProduct) {
        const hasProduct = cart.some(cartItem => cartItem.productName === newProduct.productName)
        if (!hasProduct) {
            return setCart(previousCart => [...previousCart, newProduct])
        }
        setCart(previousCart => previousCart.map(cartItem => {
            if (cartItem.productName === newProduct.productName) cartItem.quantity += newProduct.quantity
            return cartItem
        }))
    }

    function removeFromCart(productName) {
        return setCart(previousCart => previousCart.filter(cartItem => cartItem.productName !== productName))
    }

    useEffect(() => {
        const newQuantity = cart.reduce((accumulator, product) => accumulator + product.quantity, 0)
        setTotalQuantity(newQuantity)
    }, [cart, setTotalQuantity])

    return {
        totalQuantity, cart, setCart, addToCart, removeFromCart
    }
}