import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
    const { cartListItems } = useContext(CartContext);
    let itemsInCart = 0

    cartListItems.map((item) => {
        itemsInCart = itemsInCart + item.qty;
    });

    return (
        <div>
            <div className="itemsInCart">{itemsInCart}</div>
            <ShoppingCartIcon className="cart-icon" />;
        </div>
    );
};

export default CartWidget;
