//React Imports
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Libraries Imports
import { Button } from "@mui/material";

//Components Imports
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";

//Styles Imports
import "./CardDetail.css";


const CardDetail = ({ data, item }) => {

    const [showButton, setShowButton] = useState(false);
    const { addItem } = useContext(CartContext);


    function onAdd(count) {
        addItem({ data, quantity: count })
    }


    return (
        <div className="detail-container">
            <div className="img-detail">
                <img src={`/${data.image}`} alt="NFT Picture" />
            </div>
            <div className="title-detail">
                <h2 className="tit">{data.title}</h2>
                <p className="prc">${data.price}</p>
            </div>
            <div className="count-detail">
                {!showButton ? (
                    <ItemCount
                        stock={data.stock}
                        setShowButton={setShowButton}
                        item={item}
                        onAdd={onAdd}
                    />
                ) : (
                    <Button variant="contained" className="checkout-btn">
                        <Link to={"/cart"}>Go to checkout</Link>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default CardDetail;
