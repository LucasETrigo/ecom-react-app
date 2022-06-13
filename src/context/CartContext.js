import React, { useState, createContext } from "react";




const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartListItems, setCartListItems] = useState([]);
    console.log('cartlistitem desde fueradel if: ',cartListItems)

    const isInCart = (id) => {
        const found = cartListItems.find(item => item.data.id === id);
        return found;
    };

    const addItem = (item) => {
        if(isInCart(item.data.id)) {
            setCartListItems(cartListItems.map((prod) => {
                console.log('jsxghbd', prod);
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
