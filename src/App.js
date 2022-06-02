import Home from "./routes/Home";
import Checkout from "./routes/checkout";
import HotelDetails from "./routes/hotelDetails";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as BrowserRouter,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Login from "./Pages/login";
import ResponsiveAppBar from "./components/navigation";
function App() {
  let [loginVerified, setLoginVerified] = useState(false);

  function logOut() {
    setLoginVerified(false);
  }
  return (
    <div className="App">
      <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          {/* <Route
            path="/"
            
            element={<>}
            component={<Login setLoginVerified={setLoginVerified} />}
          /> */}
          <Route path="/home" element={<Home />} component={<Home />} />
          <Route
            path="/checkout"
            element={<Checkout />}
            component={<Checkout />}
          />
          <Route
            path="/hotelDetails"
            element={<HotelDetails />}
            component={<HotelDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
