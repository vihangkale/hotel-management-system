import Home from "./routes/Home";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as BrowserRouter,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Login from "./Pages/login";
function App() {
  let [loginVerified, setLoginVerified] = useState(false);

  function logOut() {
    setLoginVerified(false);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route
            path="/"
            
            element={<>}
            component={<Login setLoginVerified={setLoginVerified} />}
          /> */}
          <Route path="/home" element={<Home />} component={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
