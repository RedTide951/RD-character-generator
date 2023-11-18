import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Intro.css"; // Import your CSS file

const IntroComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    // Redirect to the main page or any desired route
    history.push("/main-page"); // Update the route to your main page
  };

  return (
    <div className={`intro-container ${isHovered ? "no-blur" : "blur"}`}>
      <button
        className="intro-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default IntroComponent;
