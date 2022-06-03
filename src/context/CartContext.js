import React, { useState, createContext, Provider } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState([]);

    const data = {
        cartListItems,
    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
