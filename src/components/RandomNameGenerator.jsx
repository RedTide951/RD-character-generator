import React, { useState } from "react";
import { generateRandomName } from "./NameData";
import Button from "@mui/material/Button";

const RandomNameGenerator = ({ firstNames, lastNames }) => {
  const [randomName, setRandomName] = useState("");

  const handleGenerateClick = () => {
    const newName = generateRandomName();
    setRandomName(newName);
  };

  const handleNameChange = (event) => {
    setRandomName(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "10px", width: "220px" }}
          onClick={handleGenerateClick}
        >
          Generate Name
        </Button>
        <input
          type="text"
          value={randomName}
          onChange={handleNameChange}
          style={{
            marginLeft: "2px",
            fontSize: "18px",
            flexGrow: 1,
            border: "1px solid #ccc",
            maxWidth: "200px",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
};

export default RandomNameGenerator;
