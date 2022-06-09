import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
    const { cartListItems, addItem } = useContext(CartContext);
    console.log(cartListItems);

    return (
        <div>
            {cartListItems.map((item) => {
                <div key={item.id}>
                    <h1>{item.title}</h1>
                </div>;
            })}
        </div>
    );
};

export default Cart;
