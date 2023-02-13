import "./Home.scss";
import React from "react";
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
  const { hotels } = useContext(UserContext);
  const valueOfHotels = Object.values(hotels);
  return (
    <Box className="homeContainer">
      <Box className="filter" flexWrap={"wrap"}>
        <SearchBar />
        <Autocomplete
          id="filter-demo"
          options={valueOfHotels ? valueOfHotels : []}
          getOptionLabel={(option) => option?.name}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Filter By Hotel Name" />
          )}
        />
        <Autocomplete
          id="filter-demo"
          options={PRICE_RANGE ? PRICE_RANGE : []}
          getOptionLabel={(option) => option}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Filter By Price Range" />
          )}
        />

        <Autocomplete
          id="filter-demo"
          options={valueOfHotels ? valueOfHotels : []}
          getOptionLabel={(option) => option?.location}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Filter By Location" />
          )}
        />
      </Box>
      <Box sx={{ marginTop: 5 }}>
        {valueOfHotels.map((eachHotel, index) => (
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
