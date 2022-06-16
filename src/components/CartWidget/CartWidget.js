import { Link } from "react-router-dom";
import { useContext } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import CartContext from "../../context/CartContext";

//Styles Imports
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
            <Link to={'/cart'}>
                <ShoppingCartIcon className="cart-icon"/>
            </Link>
        </div>
    );
};

export default CartWidget;
