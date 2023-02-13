import "./EditHotal.scss";
import React, { useEffect } from "react";
import InputSection from "../InputSection/InputSection";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import { AMENITIES } from "../../utils/constant";
import {
  TextField,
  Stack,
  Button,
  Autocomplete,
  Checkbox,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const EditHotal = () => {
  const {
    currentHotelInfo,
    setCurrentHotelInfo,
    hotels,
    setHotels,
    switchButton,
    setSwitchButton,
    editHotel,
  } = useContext(UserContext);

  useEffect(() => {
    setCurrentHotelInfo(editHotel[1]);
  }, []);
  return (
    <Box sx={{ width: "100%", display: "flex", justifyItems: "center" }}>
      <Box className="editHotelFormContainer">
        <Typography variant="h2" textAlign={"center"} mb={4}>
          Edit Hotel
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Hotel Name"
          defaultValue={editHotel[1].name}
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
          defaultValue={editHotel[1].price}
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
          defaultValue={editHotel[1].location}
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
          defaultValue={editHotel[1].image}
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
          options={AMENITIES}
          disableCloseOnSelect
          defaultValue={editHotel[1].amenities}
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
        <Link to="/admin">
          <Button
            sx={{ marginTop: "40px", marginBottom: "100px" }}
            size="large"
            variant="contained"
            onClick={() => {
              let key = Object.keys(hotels).length + 1;
              console.log(currentHotelInfo);
              if (
                currentHotelInfo?.name !== undefined &&
                currentHotelInfo?.price !== undefined &&
                currentHotelInfo?.image !== undefined &&
                currentHotelInfo?.location !== undefined &&
                currentHotelInfo?.amenities !== undefined
              ) {
                let key = editHotel[0];
                let copeOfObj = hotels;
                hotels[key] = currentHotelInfo;
                setHotels(copeOfObj);
              }
            }}
          >
            Save
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default EditHotal;
