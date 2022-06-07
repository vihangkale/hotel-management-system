import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import HotelCard from "../../components/hotelCard";
import SnackBar from "../../components/snackBar";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useLocation, useNavigate } from "react-router-dom";
import BasicDateRangePicker from "../../components/dateRangePicker";
const Checkout = (props) => {
  const location = useLocation();
  let navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  function goBackToHotelHome() {
    navigate("/home", { replace: true });
  }
  return (
    <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
      <Button onClick={(e) => goBackToHotelHome()}>Back to Home</Button>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Paper sx={{ height: "56vh" }}>
            <Stack spacing={2} sx={{ p: 5 }} direction="row">
              <Stack spacing={2}>
                <Typography variant="h6">Personal Details</Typography>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Name
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    //value={values.password}
                    //onChange={handleChange('password')}
                    label="Password"
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    //value={values.password}
                    //onChange={handleChange('password')}
                    label="name"
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Mobile Number
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    //value={values.password}
                    //onChange={handleChange('password')}
                    label="mobno"
                  />
                </FormControl>
                <Button variant="contained" sx={{ width: "10ch" }}>
                  Save
                </Button>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h6">Booking Dates</Typography>
                <BasicDateRangePicker label="Check In" />
                <BasicDateRangePicker label="Check Out" />
              </Stack>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <HotelCard
            buttonText="Confirm Booking"
            hotels={location.state.hotel}
            setOpenSnackbar={setOpenSnackbar}
          />
        </Grid>
      </Grid>
      <SnackBar
        snackBarMessage={`${
          location.state.hotel && location.state.hotel.name
            ? location.state.hotel.name
            : ""
        } Sucessfully Booked`}
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      />
    </Container>
  );
};

export default Checkout;
