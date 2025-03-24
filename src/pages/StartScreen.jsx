import React from "react";
import backgroundImage from "../assets/SENIOR HIGH SCHOOL BUILDING.jpg";
import strandLogo from "../assets/strand.png";
import schoolLogo from "../assets/schoolLogo.jpg";
import "../style/StartScreen.css";

const StartScreen = () => {
  return (
    <div className="start-screen">
      <div
        className="background-overlay"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="content-container">
        <div className="logo-container">
          <img
            src={schoolLogo}
            alt="College Logo"
            className="logo"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <img
            src={strandLogo}
            alt="STEM Logo"
            className="logo"
            style={{
              width: "15rem",
              height: "10rem",
            }}
          />
        </div>

        <h1 className="title">Tap your ID to start</h1>

        <div className="message-box">Your Future is Here!</div>
      </div>
    </div>
  );
};

export default StartScreen;
