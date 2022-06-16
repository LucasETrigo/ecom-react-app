//React Imports
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


//Firebase Imports
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

//Components Imports
import CardDetail from "../CardDetail/CardDetail";

//Styles Imports
import "./CardDetailContainer.css";



const CardDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState({});


    const getProduct = async() => {
        const docRef = doc(db, "products", id)
        const docSnapshot =  await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }

    useEffect(() => {
        getProduct()
        .then( (prod) => {
            setProduct(prod)
        })
    }, [id]);

    return (
            <div className="details-container">
                <CardDetail data={product} />
            </div>
    );
};

export default CardDetailContainer;