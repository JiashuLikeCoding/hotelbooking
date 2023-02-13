import "./SearchBar.scss";
import React from "react";
import { IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <TextField
        sx={{ width: 500 }}
        label="Search By Location"
        variant="outlined"
      />
      <IconButton sx={{ marginLeft: "-35px" }}>
        <Search sx={{ color: "black" }} />
      </IconButton>
    </div>
  );
};

export default SearchBar;
