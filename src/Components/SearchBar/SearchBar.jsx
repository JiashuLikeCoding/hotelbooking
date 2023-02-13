import "./SearchBar.scss";
import React from "react";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import { IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const { searchArgs, setSearchArgs } = useContext(UserContext);
  return (
    <div className="searchBarContainer">
      <TextField
        sx={{ width: 500 }}
        label="Search By Hotel Name or Location"
        variant="outlined"
        onChange={(event) => {
          setSearchArgs(event.target.value);
        }}
      />
      <IconButton sx={{ marginLeft: "-35px" }}>
        <Search sx={{ color: "black" }} />
      </IconButton>
    </div>
  );
};

export default SearchBar;
