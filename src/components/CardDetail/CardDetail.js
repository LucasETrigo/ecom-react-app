import React, { useContext, useState } from "react";
import "./CardDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import productos from "../../utils/productsMock";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CartContext from "../../context/CartContext";

const CardDetail = ({ data, item }) => {
    function onAdd(count) {
        console.log(`Agregaste ${count} al carrito`);
    }

    const [showButton, setShowButton] = useState(false);

    const { addItem } = useContext(CartContext);

    return (
        <div className="detail-container">
            <div className="img-detail">
                <img src={`/${data.image}`} alt="NFT Picture" />
            </div>
            <div className="title-detail">
                <h2 className="tit">{data.title}</h2>
                <p className="prc">{data.price}</p>
            </div>
            <div className="count-detail">
                {!showButton ? (
                    <ItemCount
                        stock={data.stock}
                        setShowButton={setShowButton}
                        item={item}
                        addItem={addItem}
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
