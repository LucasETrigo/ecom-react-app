import * as React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const NavBar = () => {
    return (
        <AppBar position="static" className="header-primary">
            <Toolbar>
                <div className="container-logo">
                    <a>
                        <Link to={"/home"}>NFTxHype</Link>
                    </a>
                </div>
                <ul className="navbar">
                    <li>
                        <Button
                            disableRipple
                            style={{ backgroundColor: "transparent" }}
                            variant="text"
                            className="navbar__btn"
                        >
                            <Link to={"/home"}>Home</Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            disableRipple
                            style={{ backgroundColor: "transparent" }}
                            variant="text"
                            className="navbar__btn"
                        >
                            <Link to={"/products/:id"}>Item Details</Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            disableRipple
                            style={{ backgroundColor: "transparent" }}
                            variant="text"
                            className="navbar__btn"
                        >
                            <Link to={"/products/:id"}>Rare NFT</Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            disableRipple
                            style={{ backgroundColor: "transparent" }}
                            variant="text"
                            className="navbar__btn"
                        >
                            <Link to={"/contact"}>Contact Us</Link>
                        </Button>
                    </li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
