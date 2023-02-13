import "./ThanksPage.scss";
import React, { useContext } from "react";
import { Box } from "@mui/system";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { UserContext } from "../UserContext/UserContext";

const ThanksPage = () => {
  const { selectedBookingInfo, userInfo } = useContext(UserContext);
  return (
    <Box className="thanksPageContainer">
      <Typography variant="h2">Thank You {userInfo.firstName}</Typography>
      <Card sx={{ width: "80%", marginTop: "40px" }}>
        <CardMedia sx={{ height: 400 }} image={selectedBookingInfo.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {selectedBookingInfo.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Price:{selectedBookingInfo.price}$
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Location:{selectedBookingInfo.location}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Amenities:
            {selectedBookingInfo.amenities.map((each) => each + "; ")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Date:{userInfo.bookingDate}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Email:{userInfo.email}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Phone:{userInfo.phone}
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="h5" sx={{ marginTop: 5 }}>
        Thanks for booking with us!
      </Typography>
    </Box>
  );
};

export default ThanksPage;
