// MyButton.jsx
import React from "react";
import Button from "@mui/material/Button";

const MyButton = ({ onClick, children }) => {
  return (
    <Button onClick={onClick} variant="contained" color="primary">
      {children}
    </Button>
  );
};

export default MyButton;