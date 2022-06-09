import React, { useState, createContext } from "react";




const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartListItems, setCartListItems] = useState([]);

    const isInCart = (id) => {
        const found = cartListItems.find(item => item.id === id);
        return found;
    };

    const addItem = (item) => {
        isInCart(item.id)
            ?
            setCartListItems(cartListItems.map((prod) => {
                if(prod.id === item.id) {
                    prod.quantity += item.quantity
                }
                return prod;
            }))
            :
            setCartListItems([...cartListItems, item,]);
        console.log(cartListItems);
    };


    const removeItem = (id) => {
        setCartListItems(cartListItems.filter(item => item.id !== id))
    }

    const clearItems = () => {
        setCartListItems([]);
    }

    return (
        <CartContext.Provider value={{ cartListItems, addItem, removeItem, clearItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
export { CartProvider };
