import React from "react";
import "./CardDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const CardDetail = ({ data }) => {
    //console.log("data desde card detail: ", data)

    return (
        <div className="detail-container">
            <div className="img-detail">
                <img src={`/${data.image}`} />
            </div>
            <div className="title-detail">
                <h2 className="tit">{data.title}</h2>
                <p className="prc">{data.price}</p>
            </div>
            <div className="count-detail">
                <ItemCount />
            </div>
        </div>
    );
};

export default CardDetail;
