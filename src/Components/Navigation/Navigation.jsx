import React from "react";
import "./Navigation.scss";
import SearchBar from "../SearchBar/SearchBar";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="container">
      <Link to="/">
        <div className="icon">
          <img src="https://cdn1.vectorstock.com/i/1000x1000/97/95/hotel-booking-round-design-template-line-icon-vector-18199795.jpg" />
          <span>Hotel Booking</span>
        </div>
      </Link>

      <ButtonsGroup />
    </div>
  );
};

export default Navigation;
