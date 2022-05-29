import React from "react";
import './CardDetail.css';

const CardDetail = ({data}) => {

    //console.log("data desde card detail: ", data)

    return (
        <div className="detail-container">
            <h2>{data.title}</h2>
            <p>{data.price}</p>
        </div>
    );
};

export default CardDetail;
