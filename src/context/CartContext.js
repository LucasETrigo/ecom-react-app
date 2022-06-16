import React, { useState, createContext } from "react";




const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartListItems, setCartListItems] = useState([]);

    const isInCart = (id) => {
        const found = cartListItems.find(item => item.data.id === id);
        return found;
    };

    const addItem = (item) => {
        if(isInCart(item.data.id)) {
            setCartListItems(cartListItems.map((prod) => {
                if(prod.data.id === item.data.id) {
                    prod.quantity += item.quantity
                }
                return prod;
            }))
        } else {
            setCartListItems([...cartListItems, item,]);
        }
    };


    const removeItem = (id) => {
        return setCartListItems(cartListItems.filter(item => item.data.id !== id))
    }

    const clearItems = () => {
        setCartListItems([]);
    }

    const getTotalPrice = () =>
        cartListItems ? cartListItems.reduce((totalPrice, item) => totalPrice + item.data.price * item.quantity, 0) : 0;

    return (
        <CartContext.Provider value={{ cartListItems, addItem, removeItem, clearItems, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
export { CartProvider };