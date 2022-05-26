import React from "react";
import { useEffect, useState } from "react";
import { producto1 } from "../../utils/productsMock";
import CardDetail from "../CardDetail/CardDetail";

const CardDetailContainer = () => {

    const [product, setProduct] = useState({});
    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(producto1)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
            .then((res) => {
                console.log("Respuesta getItem ", res);
                setProduct(res);
            })
    }, [])


    return (
        <>
            <div>CardDetailContainer</div>
            <CardDetail data={product}/>
        </>
    );
};

export default CardDetailContainer;
