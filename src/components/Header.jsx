import React from "react";

export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minWidth: "100%",
        // background: "black",
      }}
    >
      <h1
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "5px",
          marginTop: "15px",
          fontSize: "50px",
        }}
      >
        Rafo's Dungeons Character Generator
      </h1>
    </div>
  );
};
