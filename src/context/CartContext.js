import React, { useState, createContext } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState([]);

    const isInCart = (id) => {};

    const addItem = (item, qty) => {
        setCartListItems([
            ...cartListItems,
            { id: item.id, name: item.title, price: item.price, qty: qty },
        ]);
        console.log(cartListItems);
    };

    return (
        <CartContext.Provider value={{ cartListItems, addItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
export { CartProvider };
