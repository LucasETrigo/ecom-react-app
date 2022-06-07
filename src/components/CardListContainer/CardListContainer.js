import CardList from "../CardList/CardList";
import { useState, useEffect } from "react";
import "./CardListContainer.css";
import productos from "../../utils/productsMock";
import { useParams } from "react-router-dom";

const CardListContainer = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);

    const { idCategory } = useParams();

    const getProducts = () => {
        setSpinner(true);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
    };

    useEffect(() => {
        getProducts()
            .then((response) => {
                setSpinner(false);
                setProducts(
                    idCategory
                        ? response.filter(
                              (item) => item.category === idCategory
                          )
                        : response
                );
            })
            .catch((err) => {
                console.log("Fallo.");
            });
    }, [idCategory]);

    return (
        <div className="general-container">
            <CardList products={products} />
        </div>
    );
};

export default CardListContainer;
