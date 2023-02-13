import "./App.scss";
import Navigation from "./Components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navigation />
      <Routes>
        <Route path="/admin" exact element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
