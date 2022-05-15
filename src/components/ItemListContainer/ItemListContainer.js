import CardItem from '../Card/Card';
import { Container, Grid } from '@mui/material';

const ItemListContainer = () => {
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