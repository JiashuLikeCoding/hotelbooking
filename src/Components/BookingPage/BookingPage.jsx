import "./BookingPage.scss";
import React, { useContext } from "react";
import { Box } from "@mui/system";
import {
  Typography,
  TextField,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import { UserContext } from "../UserContext/UserContext";
import { Link } from "react-router-dom";
const BookingPage = () => {
  const { selectedBookingInfo, userInfo, setUserInfo } =
    useContext(UserContext);
  return (
    <Box className="bookingPageContainer">
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Booking Hotel
      </Typography>
      <Box className="bookingField">
        <div className="leftBox">
          <TextField
            sx={{ width: "70%" }}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={(event) => {
              setUserInfo({ ...userInfo, firstName: event.target.value });
            }}
          />
          <TextField
            sx={{ width: "70%" }}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={(event) => {
              setUserInfo({ ...userInfo, lastName: event.target.value });
            }}
          />
          <TextField
            sx={{ width: "70%" }}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            onChange={(event) => {
              setUserInfo({ ...userInfo, phone: event.target.value });
            }}
          />
          <TextField
            sx={{ width: "70%" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(event) => {
              setUserInfo({ ...userInfo, email: event.target.value });
            }}
          />
          <TextField
            sx={{ width: "70%" }}
            id="outlined-basic"
            label="Booking Date (Year/Month/Day)"
            variant="outlined"
            onChange={(event) => {
              setUserInfo({ ...userInfo, bookingDate: event.target.value });
            }}
          />
          <TextField
            sx={{ width: "70%" }}
            id="outlined-basic"
            label="Card Number"
            variant="outlined"
            onChange={(event) => {
              setUserInfo({ ...userInfo, cardNumber: event.target.value });
            }}
          />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            sx={{ width: "70%" }}
          >
            <TextField
              id="outlined-basic"
              label="SVC"
              variant="outlined"
              onChange={(event) => {
                setUserInfo({ ...userInfo, svc: event.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Expired Day"
              variant="outlined"
              onChange={(event) => {
                setUserInfo({ ...userInfo, expiredDay: event.target.value });
              }}
            />
          </Box>
        </div>

        <div>
          <Card sx={{ width: "80%", marginTop: "70px" }}>
            <CardMedia sx={{ height: 300 }} image={selectedBookingInfo.image} />
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
            </CardContent>
          </Card>
        </div>
      </Box>
      <Link to="orderComplete">
        <Box
          alignItems={"center"}
          width="100%"
          display={"flex"}
          justifyContent="center"
        >
          <Button
            sx={{ marginTop: "40px", marginBottom: "100px", width: "40%" }}
            size="large"
            variant="contained"
            onClick={() => {}}
          >
            Book
          </Button>
        </Box>
      </Link>
    </Box>
  );
};

export default BookingPage;
