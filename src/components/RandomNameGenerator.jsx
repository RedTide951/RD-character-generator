import React, { useState } from "react";
import { generateRandomName } from "./NameData";
import Button from "@mui/material/Button";

const RandomNameGenerator = ({ firstNames, lastNames }) => {
  const [randomName, setRandomName] = useState("");

  const handleGenerateClick = () => {
    const newName = generateRandomName();
    setRandomName(newName);
  };

  return (
    <div>
      <h1 style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', marginTop: '20px'}}>Rafo's Dungeons Character Generator</h1>
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', display: 'flex', alignItems: 'center' }}>
        <Button variant="contained" color="primary" style={{ marginRight: '10px', width: '220px' }} onClick={handleGenerateClick}>Generate Name</Button>
        <p style={{ marginLeft: '2px',fontSize: '20px', flexGrow: 1 }}>{randomName}</p>
      </div>
    </div>
  );
};

export default RandomNameGenerator;
