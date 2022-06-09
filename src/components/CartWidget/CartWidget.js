import { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import CartContext from "../../context/CartContext";

import "./CartWidget.css";

const CartWidget = () => {
    
    const { cartListItems } = useContext(CartContext);
    let itemsInCart = 0

    cartListItems.map((item) => {
        itemsInCart = itemsInCart + item.quantity;
    });

    return (
        <div>
            <div className="itemsInCart">{itemsInCart}</div>
            <ShoppingCartIcon className="cart-icon" />
        </div>
    );
};

export default CartWidget;
