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

    useEffect(() => {
        setProduct(productFilter);
    }, [id]);

    const productFilter = productos.find((product) => {
        return product.id == id;
    });

    return (
        <>
            <div className="details-container">
                <CardDetail data={product} />
            </div>
        </>
    );
};

export default CardDetailContainer;
