import "./HotelList.scss";
import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
const HotelList = () => {
  const { hotels, setHotels, editHotel, setEditHotel } =
    useContext(UserContext);

  useEffect(() => {}, [hotels]);
  return (
    <Box className="hotelListContainer">
      {hotels &&
        Object.keys(hotels).map((eachHotelKey, index) => (
          <Card key={index} sx={{ width: "100%", marginBottom: "40px" }}>
            <CardMedia
              sx={{ height: 300 }}
              image={hotels[eachHotelKey].image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hotels[eachHotelKey].name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Price:{hotels[eachHotelKey].price}$
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Location:{hotels[eachHotelKey].location}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Amenities:
                {hotels[eachHotelKey].amenities.map((each) => each + "; ")}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="editHotal">
                <Button
                  size="large"
                  onClick={() => {
                    setEditHotel([eachHotelKey, hotels[eachHotelKey]]);
                  }}
                >
                  Edit
                </Button>
              </Link>

              <Button
                size="large"
                color="error"
                onClick={() => {
                  let copeOfData = { ...hotels };
                  delete copeOfData[eachHotelKey];
                  setHotels(copeOfData);
                }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
};

export default HotelList;
