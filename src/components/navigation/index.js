import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HotelIcon from "@mui/icons-material/Hotel";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const ResponsiveAppBar = ({ useAuth }) => {
  let navigate = useNavigate();

  let auth = useAuth();

  function logOut() {
    auth.signout(() => navigate("/"));
  }
  return (
    <AppBar position="static" sx={{ bgcolor: "#389393" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters onClick={(e) => e.stopPropagation()}>
          <HotelIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Hotel
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={logOut}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Log Out
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
