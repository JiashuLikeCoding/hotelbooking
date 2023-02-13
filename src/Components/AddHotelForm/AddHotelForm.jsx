import "./AddHotelForm.scss";
import React from "react";
import InputSection from "../InputSection/InputSection";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import {
  TextField,
  Stack,
  Button,
  Autocomplete,
  Checkbox,
  Box,
} from "@mui/material";

const AddHotelForm = () => {
  const {
    currentHotelInfo,
    setCurrentHotelInfo,
    hotels,
    setHotels,
    switchButton,
    setSwitchButton,
  } = useContext(UserContext);
  const amenities = [
    "Free parking",
    "Free WiFi internet access",
    "Gym or fitness center",
    "Mobile Check-In",
    "Free breakfast",
  ];
  return (
    <Box className="addHotelFormContainer">
      <TextField
        required
        id="outlined-required"
        label="Hotel Name"
        onChange={(event) => {
          setCurrentHotelInfo({
            ...currentHotelInfo,
            name: event.target.value,
          });
        }}
      />
      <TextField
        sx={{ marginTop: "40px" }}
        required
        type="number"
        id="outlined-required"
        label="Hotel Price"
        onChange={(event) => {
          setCurrentHotelInfo({
            ...currentHotelInfo,
            price: event.target.value,
          });
        }}
      />
      <TextField
        sx={{ marginTop: "40px" }}
        required
        id="outlined-required"
        label="Hotel Location"
        onChange={(event) => {
          setCurrentHotelInfo({
            ...currentHotelInfo,
            location: event.target.value,
          });
        }}
      />

      <TextField
        sx={{ marginTop: "40px" }}
        required
        id="outlined-required"
        label="Hotel IMAGE URL"
        onChange={(event) => {
          setCurrentHotelInfo({
            ...currentHotelInfo,
            image: event.target.value,
          });
        }}
      />
      <Autocomplete
        sx={{ marginTop: "40px" }}
        multiple
        id="checkboxes"
        options={amenities}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {option}
          </li>
        )}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Amenities"
            placeholder="add amenities"
          />
        )}
        onChange={(event, value) => {
          setCurrentHotelInfo({ ...currentHotelInfo, amenities: value });
        }}
      />
      <Button
        sx={{ marginTop: "40px", marginBottom: "100px" }}
        size="large"
        variant="contained"
        onClick={() => {
          setHotels([...hotels, currentHotelInfo]);
          setSwitchButton(!switchButton);
        }}
      >
        Add Hotel
      </Button>
    </Box>
  );
};

export default AddHotelForm;
