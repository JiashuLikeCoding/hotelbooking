import "./Home.scss";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Autocomplete,
  TextField,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import { PRICE_RANGE } from "../../utils/constant";
const Home = () => {
  const { hotels, searchArgs, filterOptions, setFilterOptions } =
    useContext(UserContext);
  const valueOfHotels = Object.values(hotels);
  const [filteredHotels, setFilteredHotel] = useState(valueOfHotels);

  //   valueOfHotels.filter(
  //     (eachHotel) =>
  //       eachHotel.name.toLowerCase().includes(searchArgs.trim().toLowerCase()) ||
  //       eachHotel.location.toLowerCase().includes(searchArgs.trim().toLowerCase())
  //   );

  useEffect(() => {
    let tempHotel = valueOfHotels;
    let tempOption = {};
    for (const [key, value] of Object.entries(filterOptions)) {
      if (value !== undefined) {
        tempOption = { ...tempOption, [key]: value };
      }
    }
    if ("name" in tempOption) {
      tempHotel = tempHotel.filter(
        (eachHotel) => eachHotel.name === tempOption?.name
      );
    }

    if ("location" in tempOption) {
      tempHotel = tempHotel.filter(
        (eachHotel) => eachHotel.location === tempOption?.location
      );
    }

    Object.keys(tempOption).length !== 0
      ? setFilteredHotel(() =>
          tempHotel.filter(
            (eachHotel) =>
              eachHotel.name
                .toLowerCase()
                .includes(searchArgs.trim().toLowerCase()) ||
              eachHotel.location
                .toLowerCase()
                .includes(searchArgs.trim().toLowerCase())
          )
        )
      : setFilteredHotel(() =>
          valueOfHotels.filter(
            (eachHotel) =>
              eachHotel.name
                .toLowerCase()
                .includes(searchArgs.trim().toLowerCase()) ||
              eachHotel.location
                .toLowerCase()
                .includes(searchArgs.trim().toLowerCase())
          )
        );

    // if(Object.keys(tempOption).length === 0 && searchArgs)
  }, [filterOptions, searchArgs]);

  return (
    <Box className="homeContainer">
      <Box className="filter" flexWrap={"wrap"}>
        <SearchBar />
        <Autocomplete
          options={valueOfHotels ? valueOfHotels : []}
          getOptionLabel={(option) => option?.name}
          sx={{ width: 400 }}
          renderInput={(params) => (
            <TextField {...params} label="Filter By Hotel Name" />
          )}
          onChange={(event, value) => {
            setFilterOptions({ ...filterOptions, name: value?.name });
          }}
        />

        <Autocomplete
          options={valueOfHotels ? valueOfHotels : []}
          getOptionLabel={(option) => option?.location}
          sx={{ width: 400 }}
          renderInput={(params) => (
            <TextField {...params} label="Filter By Location" />
          )}
          onChange={(event, value) => {
            setFilterOptions({
              ...filterOptions,
              location: value?.location,
            });
          }}
        />
      </Box>
      <Box sx={{ marginTop: 5 }}>
        {filteredHotels.length !== 0 &&
          filteredHotels.map((eachHotel, index) => (
            <Card key={index} sx={{ width: "100%", marginBottom: "40px" }}>
              <CardMedia sx={{ height: 300 }} image={eachHotel.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {eachHotel.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Price:{eachHotel.price}$
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Location:{eachHotel.location}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Amenities:{eachHotel.amenities.map((each) => each + "; ")}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large">Book</Button>
              </CardActions>
            </Card>
          ))}
      </Box>
    </Box>
  );
};

export default Home;
