import React from "react";
import { useEffect, useState } from "react";
import { producto1 } from "../../utils/productsMock";
import CardDetail from "../CardDetail/CardDetail";
import { useParams } from "react-router-dom";

const CardDetailContainer = () => {

    console.log('Parametros: ', useParams())  /* DEFINIR PARAMETROS EN RUTA PARA QUE FUNCIONE */
    const { id } = useParams();

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
            <div>
                <CardDetail data={product}/>
            </div>
        </>
    );
};

export default CardDetailContainer;
