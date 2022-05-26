import React from "react";

const CardDetail = ({data}) => {

    //console.log("data desde card detail: ", data)

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.price}</p>
        </div>
    );
};

export default CardDetail;
