import "./ButtonsGroup.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const ButtonsGroup = () => {
  return (
    <div className="buttonsGroupContainer">
      <Link className="logoContainer" to="/admin">
        <Button size="large" variant="contained">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default ButtonsGroup;
