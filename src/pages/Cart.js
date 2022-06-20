//React Imports
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Firebase Imports
import { addDoc, collection } from 'firebase/firestore';
import db from "../utils/firebaseConfig";

//Components Imports
import CartContext from "../context/CartContext";
import Modal from "../components/Modal/Modal";

//MUI Imports
import TextField from '@mui/material/TextField';

//Styles Imports
import "./Cart.css";



const Cart = () => {

    /*====== FOR CART CONTEXT ======*/
    const { cartListItems, addItem, removeItem, clearItems, getTotalPrice } = useContext(CartContext);
    
    /*====== FOR MODAL BUYER(NAME, EMAIL, PHONE) CHECKOUT ======*/
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name] : e.target.value})
    }


    /*====== FOR MODAL ORDER(ID, TITLE, PRICE...) CHECKOUT ======*/
    const [order, setOrder] = useState ({
        buyer: {},
        items: cartListItems.map( (item) => {
            return {
                id: item.data.id,
                title: item.data.title,
                price: item.data.price
            }
        }),
        total: getTotalPrice()
    })


    /*====== FIREBASE/FIRESTORE ======*/
    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden generada: ", orderDoc)
        setSuccess(orderDoc.id)
    }




    /*====== SUMBMIT ALL  ======*/
    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }



    /*====== SUCCESSFUL ORDER ======*/
    const [success, setSuccess] = useState()




    /*====== RETURN STARTS ======*/
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
                                    <button className="cart-remove-btn" onClick={() => removeItem(item.data.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            <div className="cart-total-container">
                <div className="span-total-cart">
                    <span>TOTAL: ${getTotalPrice()}</span>
                    <div className="continue-shopping">
                        <button className="cart-check-btn"><Link to={"/category"}>Continue Shopping</Link></button>
                    </div>
                </div>
                <div className="btn-clear-cart">
                    <button className="cart-clear-btn" onClick={clearItems}>Clear All</button>
                </div>
                <div className="btn-checkout-cart">
                    <button className="cart-check-btn" onClick={() => setShowModal(true)}>Go to Checkout</button>
                </div>
            </div>
            <Modal title={success ? 'Successful Order' : 'Checkout Form'} open={showModal} handleClose={() => setShowModal(false)}>
                {success ? (
                    <div>
                        Your order was received, you will get your NFTS ASAP!
                        Order Number: {success}
                    </div>
                ) : (
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <TextField id="outlined-basic" name="name" label="Full Name" variant="outlined" value={formValue.name} onChange={handleChange}/>
                        <TextField id="outlined-basic" name="phone" label="Phone Number" variant="outlined" value={formValue.phone} onChange={handleChange}/>
                        <TextField id="outlined-basic" name="email" label="Email" variant="outlined" value={formValue.email} onChange={handleChange}/>
                        <button type="submit">Finish Order</button>
                    </form>
                )}
            </Modal>
        </div>
    );
};

export default Cart;
