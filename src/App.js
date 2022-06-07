import Home from "./routes/Home";
import Checkout from "./routes/checkout";
import HotelDetails from "./routes/hotelDetails";
import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Login from "./Pages/login";
import ResponsiveAppBar from "./components/navigation";
import { fakeAuthProvider } from "./auth";

function App() {
  let AuthContext = React.createContext(null);

  function AuthProvider({ children }: { children: React.ReactNode }) {
    let [user, setUser] = React.useState(null);

    let signin = (newUser: string, callback: VoidFunction) => {
      return fakeAuthProvider.signin(() => {
        setUser(newUser);
        callback();
      });
    };

    let signout = (callback: VoidFunction) => {
      return fakeAuthProvider.signout(() => {
        setUser(null);
        callback();
      });
    };

    let value = { user, signin, signout };

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  function useAuth() {
    return React.useContext(AuthContext);
  }

  function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
  }
  return (
    <AuthProvider>
      <div className="App">
        <ResponsiveAppBar useAuth={useAuth} />
        <Routes>
          <Route path="/" element={<Login useAuth={useAuth} />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route
            path="/hotelDetails"
            element={
              <RequireAuth>
                <HotelDetails />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}
export default App;
