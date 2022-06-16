import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import productos from "../../utils/productsMock";
import CardDetail from "../CardDetail/CardDetail";

import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

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

    /*
    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        console.log(id, docSnapshot.data().id)
        product.id = docSnapshot.id
        return product
    }
    */

    return (
            <div className="details-container">
                <CardDetail data={product} />
            </div>
    );
};

export default CardDetailContainer;