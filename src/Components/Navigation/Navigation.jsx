import React from "react";
import "./Navigation.scss";
import SearchBar from "../SearchBar/SearchBar";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";
const Navigation = () => {
  return (
    <div className="container">
      <div className="icon">
        <img src="https://cdn1.vectorstock.com/i/1000x1000/97/95/hotel-booking-round-design-template-line-icon-vector-18199795.jpg" />
        <span>Hotel Booking</span>
      </div>
      <ButtonsGroup />
    </div>
  );
};

export default Navigation;
