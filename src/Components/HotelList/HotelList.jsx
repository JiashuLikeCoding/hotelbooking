import "./HotelList.scss";
import React from "react";
import { Box } from "@mui/system";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
const HotelList = () => {
  const { hotels, setHotels } = useContext(UserContext);
  console.log(hotels);
  console.log(Object.values(hotels));
  return (
    <Box className="hotelListContainer">
      {hotels &&
        Object.values(hotels).map((eachHotel, index) => (
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
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
};

export default HotelList;
