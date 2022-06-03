import React from "react";
import { Link } from "react-router-dom";
import CoverVideo from "./CoverVideo";
import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div className="container-banner">
            <div className="textos">
                <div className="textos-size">
                    <h2>Discover the most hyped</h2>
                    <span>NFT's</span>
                </div>
            </div>
            <div className="banner-btn">
                <button className="button-77 left-btn" role="button">
                    <Link to={"/category/common"}>Common NFT's</Link>
                </button>
                <button className="button-77 right-btn" role="button">
                    <Link to={"/category/rare"}>Rare NFT's</Link>
                </button>
            </div>
            <div className="video">
                <CoverVideo />
            </div>
        </div>
    );
};

export default HomeBanner;
