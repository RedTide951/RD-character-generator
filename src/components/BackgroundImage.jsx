import React from "react";

const backgroundImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('path_to_your_image.jpg')`, // Replace 'path_to_your_image.jpg' with the actual path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensures the background covers the entire viewport height
      }}
    >
      {/* Your content goes here */}
    </div>
  );
};

export default backgroundImage;
