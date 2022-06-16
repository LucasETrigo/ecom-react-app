import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Add, Remove } from "@mui/icons-material";

import CartContext from "../context/CartContext";
import { CartProvider } from "../context/CartContext";

import "./Cart.css";

const Cart = () => {
    const { cartListItems, addItem } = useContext(CartContext);

    return (
        <div>
            {
                cartListItems.map((item) => {
                    return (
                        <div className="cart-wrapper">
                            <div className="cart-bottom">
                                <div className="cart-info">
                                    <div className="cart-product">
                                        <div className="cart-product-detail">
                                            <img
                                                src={`/${item.data.image}`}
                                                alt="NFT Picture"
                                            />
                                            <div className="cart-details">
                                                <p>
                                                    Product:{" "}
                                                    <b>{item.data.title}</b>
                                                </p>
                                                <p>
                                                    ID: <b>{item.data.id}</b>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cart-price-details">
                                            <div className="product-amount-container">
                                                <div className="prod-amount-cart">Quantity: {item.quantity}</div>
                                            </div>
                                            <div className="prod-price-cart">Price: {item.data.price}</div>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="cart-summary">
                                    <button className="cart-remove-btn">Remove</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            <div className="cart-total-container">
                <div className="span-total-cart">
                    <span>TOTAL: </span>
                    <div className="continue-shopping">
                        <button className="cart-check-btn"><Link to={"/category"}>Continue Shopping</Link></button>
                    </div>
                </div>
                <div className="btn-clear-cart">
                    <button className="cart-clear-btn">Clear All</button>
                </div>
                <div className="btn-checkout-cart">
                    <button className="cart-check-btn">Go to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
