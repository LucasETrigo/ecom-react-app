import React from "react";
import "./CoverVideo.css";
import GIF from "../../assets/Home GIF.gif";

const CoverVideo = () => {
    return (
        <div className="video-container">
            <img src={GIF} alt="NFT Gif" />
        </div>
    );
};

export default CoverVideo;
