import "./Admin.scss";
import React from "react";
import AddHotelForm from "../AddHotelForm/AddHotelForm";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
const Admin = () => {
  const { switchButton, setSwitchButton } = useContext(UserContext);
  return (
    <div className="adminContainer">
      <h1 className="title">Manage Hotels</h1>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          marginLeft: "100px",
          marginRight: "100px",
          marginBottom: "50px",
        }}
      >
        <Button
          size="large"
          sx={{ width: "100%" }}
          variant={switchButton ? "contained" : "outlined"}
          onClick={() => {
            setSwitchButton(!switchButton);
          }}
        >
          Hotel List
        </Button>
        <Button
          size="large"
          sx={{ width: "100%" }}
          variant={switchButton ? "outlined" : "contained"}
          onClick={() => {
            setSwitchButton(!switchButton);
          }}
        >
          Adding Hotel
        </Button>
      </Stack>
      {!switchButton && <AddHotelForm />}
    </div>
  );
};

export default Admin;
