import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelCard from "../../components/hotelCard";
import SnackBar from "../../components/snackBar";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const Checkout = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Paper>
            <Stack spacing={2} sx={{ p: 5 }}>
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <HotelCard buttonText="Confirm Booking" priceBreakUp={true} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
