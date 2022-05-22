import CardItem from '../CardItem/CardItem';
import { Container, Grid } from '@mui/material';

const ItemListContainer = () => {

    /*
    const productos = [
        {
            title: '221 Common',
            price: '0.5 ETH',
            image: '',
            stock: 10,
            id: 1
        },

        {
            title: '666 Common',
            price: '0.3 ETH',
            image: '',
            stock: 10,
            id: 2
        },

        {
            title: '037 Common',
            price: '0.7 ETH',
            image: '',
            stock: 10,
            id: 3
        },

        {
            title: '133 Common',
            price: '0.4 ETH',
            image: '',
            stock: 10,
            id: 4
        }
    ]


    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            resolve(productos);
        }, 4000)
    }


    getProducts()
        .then( (response) => {
            console.log(`Promesa: ${response}`);
        })
        .catch( (err) => {
            console.log('Fallo.');
        })

        */
    return(
            <Grid container>
                <Grid item md={3}>
                    <CardItem title={"#221"} price={"0.5 ETH"} image={"nft-1.svg"}/>
                </Grid>
                <Grid item md={3}>
                    <CardItem title={"#666"} price={"0.3 ETH"} image={"666.svg"}/>
                </Grid>
                <Grid item md={3}>
                    <CardItem title={"#037"} price={"0.7 ETH"} image={"037.svg"}/>
                </Grid>
                <Grid item md={3}>
                    <CardItem title={"#133"} price={"0.4 ETH"} image={"133.svg"}/>
                </Grid>
            </Grid>
    )
}

export default ItemListContainer;