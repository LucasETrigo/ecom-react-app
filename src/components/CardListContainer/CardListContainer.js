import CardItem from "../CardItem/CardItem";
import CardList from "../CardList/CardList";
import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";

const CardListContainer = () => {
    const [products, setProducts] = useState([]);

    const productos = [
        {
            title: "221 Common",
            price: "0.5 ETH",
            image: "nft-1.svg",
            stock: 10,
            id: 1,
        },

        {
            title: "666 Common",
            price: "0.3 ETH",
            image: "666.svg",
            stock: 10,
            id: 2,
        },

        {
            title: "037 Common",
            price: "0.7 ETH",
            image: "037.svg",
            stock: 10,
            id: 3,
        },

        {
            title: "133 Common",
            price: "0.4 ETH",
            image: "133.svg",
            stock: 10,
            id: 4,
        },
    ];

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
