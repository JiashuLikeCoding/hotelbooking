import "./ButtonsGroup.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { UserContext } from "../UserContext/UserContext";
const ButtonsGroup = () => {
  const { login, setLogin } = useContext(UserContext);
  return (
    <div className="buttonsGroupContainer">
      {login ? (
        <Link className="logoContainer" to="/">
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              setLogin(false);
            }}
          >
            Login Out
          </Button>
        </Link>
      ) : (
        <Link className="logoContainer" to="/admin">
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              setLogin(true);
            }}
          >
            Login As Admin
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ButtonsGroup;
