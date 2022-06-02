import React from "react";
import { useEffect, useState } from "react";
import productos, { producto1 } from "../../utils/productsMock";
import CardDetail from "../CardDetail/CardDetail";
import { useParams } from "react-router-dom";
import "./CardDetailContainer.css";

const CardDetailContainer = () => {
    /* DEFINIR PARAMETROS EN RUTA PARA QUE FUNCIONE */
    const { id } = useParams();

    const [product, setProduct] = useState({});

    /*
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(producto1);
            }, 2000);
        });
    };
    */

    useEffect(() => {
        console.log("producto filtrado por id: ", productFilter);
        setProduct(productFilter);
    }, []);

    const productFilter = productos.find((product) => {
        return product.id == id;
    });

    /*
    useEffect(() => {
        getItem().then((res) => {
            console.log("Respuesta getItem ", res);
            setProduct(res);
        });
    }, []);
    */

    return (
        <>
            <div className="details-container">
                <CardDetail data={product} />
            </div>
        </>
    );
};

export default CardDetailContainer;
