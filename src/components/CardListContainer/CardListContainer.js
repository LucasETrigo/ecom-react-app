import CardItem from "../CardItem/CardItem";
import CardList from "../CardList/CardList";
import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import "./CardListContainer.css";
import productos from "../../utils/productsMock";

const CardListContainer = () => {
    const [products, setProducts] = useState([]);


    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 4000);
        });
    };

    useEffect(() => {
        getProducts()
            .then((response) => {
                setProducts(response);
            })
            .catch((err) => {
                console.log("Fallo.");
            });
    }, []);

    return (
        <div className="general-container">
            <CardList products={productos} />
        </div>
    );
};

export default CardListContainer;
