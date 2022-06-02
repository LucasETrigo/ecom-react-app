import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// components
import ItemCount from "../ItemCount/ItemCount";

// style
import "./CardItem.css";

import { Link } from "react-router-dom";

const CardItem = ({ title, image, price, stock, id }) => {
    function onAdd(count) {
        console.log(`Agregaste ${count} al carrito`);
    }

    return (
        <Card sx={{ minWidth: 275 }} className="card-item-container">
            <CardContent>
                <div className="card-item-img">
                    <div className="img-container">
                        <img src={`./${image}`} alt={"producto"} />
                    </div>
                </div>
                <div className="card-item-data">
                    <div className="card-info-data">
                        <p>{title}</p>
                        <span>$ {price}</span>
                        <button className="card-btn">
                            <Link to={"/products/" + id}>Details</Link>
                        </button>
                        {/*
                            <ItemCount stock={stock} onAdd={onAdd} />
                            */}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CardItem;

/*
const CardItem = (props) => {

    const { image, title, price } = props;

    return(
        <Card sx={{ maxWidth: 345 }} variant="outlined" className='card-style'>
            <CardContent>
            <div className='card-nft'>
                <div>
                    <img src={`./${image}`} />
                </div>
                <p>{title}</p>
                <span>{price}</span>
                <ItemCount stock={10} initial={1}/>
            </div>
            </CardContent>
        </Card> 
    )
}

export default CardItem;

*/
