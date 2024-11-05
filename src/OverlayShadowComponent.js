import React from "react";
import "./OverlayShadowComponent.css";

const OverlayShadowComponent = ({ border, image }) => {
  return (
    <div className="overlay-shadow-container">
      <div className="overlay-shadow-content">
        <div className="image-container">
          <img className="border-image" src={border} alt="Border" />
          <img className="background-image" src={image} alt="Background" />
        </div>
        <div className="text-container">
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <button className="view-button">View More</button>
      </div>
    </div>
  );
};

export default OverlayShadowComponent;
