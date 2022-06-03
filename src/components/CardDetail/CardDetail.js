import React from "react";
import "./CardDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import productos from "../../utils/productsMock";

const CardDetail = ({ data }) => {
    //console.log("data desde card detail: ", data)

    function onAdd(count) {
        console.log(`Agregaste ${count} al carrito`);
    }

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
                <ItemCount stock={data.stock} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default CardDetail;
