//React Imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Firestore imports
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

//Components Imports
import CardList from "../CardList/CardList";

//Libraries Imports
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

//Styles Imports
import "./CardListContainer.css";



const CardListContainer = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const { idCategory } = useParams();


    const getProducts = async () => {
        setSpinner(true);
        const productSnapshot = await getDocs(collection(db, "products"));
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }


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
                console.log("Failed to load.");
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

    */