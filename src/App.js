import Home from "./routes/Home";
import Checkout from "./routes/checkout";
import HotelDetails from "./routes/hotelDetails";
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./Pages/login";
import ResponsiveAppBar from "./components/navigation";
const AuthContext = React.createContext(null);

function App() {
  const location = useLocation();

  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

  const useAuth = () => {
    return React.useContext(AuthContext);
  };
  const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = React.useState(null);

    const handleLogin = async () => {
      const token = await fakeAuth();

      setToken(token);
      const origin = location.state?.from?.pathname || "/home";
      navigate(origin);
    };

    const handleLogout = () => {
      setToken(null);
    };

    const value = {
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    };

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();

    if (!token) {
      return <Navigate to="/" replace state={{ from: location }} />;
    }

    return children;
  };

  return (
    <AuthProvider>
      <div className="App">
        <ResponsiveAppBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" component={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
              component={<Home />}
            />
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
    </AuthProvider>
  );
}

export default App;
