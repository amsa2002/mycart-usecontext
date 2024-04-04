import React, { createContext, useState } from "react";
import productsData from "../components/assets/products.json";

export const ShopContext = createContext(null)

export const ShopContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState({});

    const addToCart = (productId) => {
        setCartItems(prevCartItems => {
            return {
                ...prevCartItems,
                [productId]: (prevCartItems[productId] || 0) + 1
            };
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevCartItems => {
            const updatedCartItems = {...prevCartItems};
            if (updatedCartItems[productId] > 0) {
                updatedCartItems[productId] -= 1;
            }
            return updatedCartItems;
        });
    };

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const productId in cartItems) {
            const product = productsData.products.find(product => product.id.toString() === productId);
            if (product) {
                totalAmount += product.price * cartItems[productId];
            }
        }
        return totalAmount;
    };
    
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = {
        products: productsData.products,
        addToCart,
        removeFromCart,
        getTotalAmount,
        getTotalCartItems
    };

    

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider