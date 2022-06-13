import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import productos from "../../utils/productsMock";
import CardDetail from "../CardDetail/CardDetail";

import "./CardDetailContainer.css";

const CardDetailContainer = () => {
    /* DEFINIR PARAMETROS EN RUTA PARA QUE FUNCIONE */
    const { id } = useParams();

    const [product, setProduct] = useState({});

    const productFilter = productos.find((product) => {
        return product.id == id;
    });

    useEffect(() => {
        setProduct(productFilter);
    }, [id]);

    return (
            <div className="details-container">
                <CardDetail data={product} />
            </div>
    );
};

export default CardDetailContainer;