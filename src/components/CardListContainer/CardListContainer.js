import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import productos from "../../utils/productsMock";
import CardList from "../CardList/CardList";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

import "./CardListContainer.css";

//Firestore
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

const CardListContainer = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);
//
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
        <>
            {
                spinner

                ?

                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
                
                :

                <div className="general-container">
                    <CardList products={products} />
                </div>

            }
        </>
    )
};

export default CardListContainer;




    /*  COMMENTED BECAUSE ON CARDDETAIL IS CAUSING ISSUE
    //Firestore
    import { collection, getDocs } from "firebase/firestore";
    import db from '../../utils/firebaseConfig';



    const getProductoss = async () => {
        const productSnapshot = await getDocs(collection(db, "products"));
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }
    */