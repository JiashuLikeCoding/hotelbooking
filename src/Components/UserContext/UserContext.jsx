import { createContext, useState } from "react";
import { MOCKUP_DATA } from "../../utils/constant";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  currentHotelInfo: null,
  setCurrentHotelInfo: () => null,
  switchButton: null,
  setSwitchButton: () => null,
  hotels: null,
  setHotels: () => null,
  searchArgs: null,
  setSearchArgs: () => null,
  filterOptions: null,
  setFilterOptions: () => {},
  selectedBookingInfo: null,
  setSelectedBookingInfo: () => {},
  userInfo: null,
  setUserInfo: () => {},
  login: null,
  setLogin: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentHotelInfo, setCurrentHotelInfo] = useState(null);
  const [switchButton, setSwitchButton] = useState(true);
  const [hotels, setHotels] = useState(MOCKUP_DATA);
  const [searchArgs, setSearchArgs] = useState("");
  const [filterOptions, setFilterOptions] = useState({});
  const [selectedBookingInfo, setSelectedBookingInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [login, setLogin] = useState(false);
  const value = {
    currentUser,
    setCurrentUser,
    currentHotelInfo,
    setCurrentHotelInfo,
    switchButton,
    setSwitchButton,
    hotels,
    setHotels,
    searchArgs,
    setSearchArgs,
    filterOptions,
    setFilterOptions,
    selectedBookingInfo,
    setSelectedBookingInfo,
    userInfo,
    setUserInfo,
    login,
    setLogin,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
