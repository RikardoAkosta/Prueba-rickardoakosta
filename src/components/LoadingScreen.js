import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../styles/loading-srceen.css";

const LoadingScreen = () => {
  return (
    <div className="overlay">
      <Spinner animation="border" />
    </div>
  );
};

export default LoadingScreen;
