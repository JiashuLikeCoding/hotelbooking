import "./App.scss";
import Navigation from "./Components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";
import BookingPage from "./Components/BookingPage/BookingPage";
import ThanksPage from "./Components/ThanksPage/ThanksPage";
import EditHotal from "./Components/EditHotal/EditHotal";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/bookingPage" exact element={<BookingPage />} />
        <Route path="/admin/editHotal" exact element={<EditHotal />} />
        <Route
          path="/bookingPage/orderComplete"
          exact
          element={<ThanksPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
