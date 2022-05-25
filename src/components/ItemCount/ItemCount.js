import { Button } from "@mui/material";
import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    function handleAdd() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function handleSubstract() {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    function onAdd(count) {
        console.log(`Agregaste ${count} al carrito`);
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
                    Add To Cart
                </Button>
            </div>
        </div>
    );
}

export default ItemCount;
