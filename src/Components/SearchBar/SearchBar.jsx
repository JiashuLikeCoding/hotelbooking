import "./SearchBar.scss";
import React from "react";
import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <input placeholder="search by location" />

      <IconButton sx={{ marginLeft: "-35px" }}>
        <Search sx={{ color: "black" }} />
      </IconButton>
    </div>
  );
};

export default SearchBar;
