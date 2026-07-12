import React, { useState } from "react";

const Hero = () => {

  const [textColor, setTextColor] = useState('white')

  function randomColorGenerator() {
    const letters = "ABCDEF0123456789";
    let colorHexCode = "#";

    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 16);
      colorHexCode += letters[index];
    }
    return colorHexCode;
  }

  function handleTextColor() {
    setTextColor(randomColorGenerator())
  }

  return (
    <div className="hero-1">
      <div className="hero-items">
        <span>FINE</span>
      </div>
      <div className="hero-items"></div>
      <div className="hero-items">
        <span onMouseEnter={handleTextColor} 
        style={{color: textColor, transition: "0.3s"}}
        className="big-text">
          EXPERIENCES
        </span>
      </div>
    </div>
  );
};

export default Hero;
