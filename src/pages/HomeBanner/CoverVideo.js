//React Imports
import React from "react";

//Components Imports
import GIF from "../../assets/Home GIF.gif";

//Styles Imports
import "./CoverVideo.css";



const CoverVideo = () => {
    return (
        <div className="video-container">
            <img src={GIF} alt="NFT Gif" />
        </div>
    );
};

export default CoverVideo;
