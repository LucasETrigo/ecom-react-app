import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';

const CardItem = (props) => {


    return(
        <Card sx={{ maxWidth: 345 }} variant="outlined" className='card-style'>
            <CardContent>
            <div className='card-nft'>
                <div>
                    <img src={`./${props.image}`} />
                </div>
                <p>{props.title}</p>
                <span>{props.price}</span>
                <ItemCount stock={10} initial={1}/>
            </div>
            </CardContent>
        </Card> 
    )
}

export default CardItem;