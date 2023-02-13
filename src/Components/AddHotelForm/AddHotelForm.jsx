import "./AddHotelForm.scss";
import React from "react";
import InputSection from "../InputSection/InputSection";
import {
  TextField,
  Stack,
  Button,
  Autocomplete,
  Checkbox,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
const AddHotelForm = () => {
  const amenities = [
    { title: "Gym" },
    { title: "Meeting Room" },
    { title: "Swiming Pool" },
    { title: "Sauna" },
  ];
  return (
    <div className="addHotelFormContainer">
      <TextField required id="outlined-required" label="Hotel Name" />
      <TextField
        sx={{ marginTop: "40px" }}
        required
        id="outlined-required"
        label="Hotel Price"
      />
      <TextField
        sx={{ marginTop: "40px" }}
        required
        id="outlined-required"
        label="Hotel Location"
      />

      <TextField
        sx={{ marginTop: "40px" }}
        required
        id="outlined-required"
        label="Hotel IMAGE URL"
      />
      <Autocomplete
        sx={{ marginTop: "40px" }}
        multiple
        id="checkboxes-tags-demo"
        options={amenities}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {option.title}
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
      />
      <Button sx={{ marginTop: "40px" }} size="large" variant="contained">
        Add Hotel
      </Button>
    </div>
  );
};

export default AddHotelForm;
