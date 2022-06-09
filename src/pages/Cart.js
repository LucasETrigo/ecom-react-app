import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
    const { cartListItems, addItem } = useContext(CartContext);

    return (
        <div>
            {
                cartListItems.map((item) => {
                    return(
                        <div key={item.id}>
                        <h3>{item.title}</h3>
                        <h5>{item.quantity}</h5>
                    </div>
                    )
                })
            }
        </div>
    )
}


export default Cart;
