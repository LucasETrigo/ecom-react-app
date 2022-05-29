import { useState, useEffect } from "react";
import CardItem from "../CardItem/CardItem";
import { Grid } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import CardListContainer from "../CardListContainer/CardListContainer";

const CardList = ({ title, products }) => {
    return (
        <>
            <h2>{title}</h2>
            <Grid container spacing={10}>
                {products.map(({ title, price, image, id, stock }) => {
                    return (
                        <Grid item md={3} key={id}>
                            <CardItem
                                title={title}
                                price={price}
                                image={image}
                                stock={stock}
                                id={id}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default CardList;

/*
const CardList = ({ products }) => {};

export default CardList;


const CardList = ({ products }) => {
    return (
        <>
            {products.map((product) => {
                return <CardItem product={product} />;
            })}
        </>
    );
};

export default CardList;
*/
