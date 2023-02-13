import "./Admin.scss";
import React from "react";
import AddHotelForm from "../AddHotelForm/AddHotelForm";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
const Admin = () => {
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
        <Button size="large" sx={{ width: "100%" }} variant="outlined">
          Hotel List
        </Button>
        <Button size="large" sx={{ width: "100%" }} variant="contained">
          Adding Hotel
        </Button>
      </Stack>
      <AddHotelForm />
    </div>
  );
};

export default Admin;
