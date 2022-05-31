import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import "./ItemCount.css";

function ItemCount({ stock, onAdd, id }) {
    const [count, setCount] = useState(1);

    function handleAdd() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function handleSubstract() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className="btnDiv">
            <div className="plus-minus">
                <Button
                    variant="contained"
                    onClick={handleSubstract}
                    className="min-btn"
                >
                    -
                </Button>
                <span> {count} </span>
                <Button
                    variant="contained"
                    onClick={handleAdd}
                    className="plus-btn"
                >
                    +
                </Button>
            </div>
            <div className="add-to-cart">
                <Button
                    variant="contained"
                    onClick={() => {
                        onAdd(count);
                    }}
                >
                    <Link to={`/products/${id}`}>Add to cart</Link>
                </Button>
            </div>
        </div>
    );
}

export default ItemCount;
