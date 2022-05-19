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
        if (count > 0) {
        setCount(count - 1);
        }
    }

    return (
        <div className="btnDiv">
        <div className="plus-minus">
            <Button variant="contained" onClick={handleSubstract}>-</Button>
            <span> {count} </span>
            <Button variant="contained" onClick={handleAdd}>+</Button>
        </div>
        <div className="add-to-cart">
            <Button variant="contained">Add To Cart</Button>
        </div>
        </div>
    );
    }

    export default ItemCount;