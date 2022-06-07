import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";

function Login({ useAuth }) {
  const theme = createTheme();
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  let [users, setUsers] = useState({
    email: "",
    password: "",
  });
  let [validation, setValidation] = useState(false);
  let [emailValidation, setEmailValidation] = useState(false);
  let [incorrectCredentials, setIncorrectCredentials] = useState(false);

  let from = location.state?.from?.pathname || "/home";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (users.email === "vihang@gmail.com" || users.password === "vihang@123") {
      auth.signin(users.email, () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      });
    } else if (users.email === "" || users.password === "") {
      setValidation(true);
    } else {
      setIncorrectCredentials(true);
    }
  };

  function handleInput(event) {
    let targetName;
    let targetValue;
    [targetName, targetValue] = [event.target.name, event.target.value];
    if (targetName === "email") {
      if (!/(.+)@(.+){2,}\.(.+){2,}/.test(targetValue)) {
        setEmailValidation(true);
      } else {
        setEmailValidation(false);
      }
    }
    console.log(targetName, "target name", targetValue, "target value");
    setUsers({
      email: targetName,
      password: targetValue,
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => handleInput(e)}
              autoFocus
              error={
                validation || incorrectCredentials || emailValidation
                  ? true
                  : false
              }
              helperText={
                validation
                  ? "Email is required"
                  : incorrectCredentials
                  ? "Incorrect Email Credentials"
                  : emailValidation
                  ? "Email is invalid"
                  : ""
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => handleInput(e)}
              error={validation || incorrectCredentials ? true : false}
              helperText={
                validation
                  ? "Pasword is required"
                  : incorrectCredentials
                  ? "Incorrect Password Credentials"
                  : ""
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
