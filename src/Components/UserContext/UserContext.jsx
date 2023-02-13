import { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  currentHotelInfo: null,
  setCurrentHotelInfo: () => null,
  switchButton: null,
  setSwitchButton: () => null,
  hotels: null,
  setHotels: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentHotelInfo, setCurrentHotelInfo] = useState(null);
  const [switchButton, setSwitchButton] = useState(true);
  const [hotels, setHotels] = useState([]);
  const value = {
    currentUser,
    setCurrentUser,
    currentHotelInfo,
    setCurrentHotelInfo,
    switchButton,
    setSwitchButton,
    hotels,
    setHotels,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
