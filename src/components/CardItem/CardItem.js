//React Imports
import { Link } from "react-router-dom";

//Libraries Imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// style
import "./CardItem.css";

const CardItem = ({ title, image, price, id, category }) => {
    function onAdd(count) {
        console.log(`Agregaste ${count} al carrito`);
    }

    return (
        <Card sx={{ minWidth: 275 }} className="card-item-container">
            <CardContent>
                <div className="card-item-img">
                    <div className="img-container">
                        <img src={`/${image}`} alt={"producto"} />
                    </div>
                </div>
                <div className="card-item-data">
                    <div className="card-info-data">
                        <p>{title}</p>
                        <span>$ {price}</span>
                        <button className="card-btn">
                            <Link to={"/products/" + id}>Details</Link>
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CardItem;
