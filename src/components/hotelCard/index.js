import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import { useNavigate } from "react-router-dom";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import PoolIcon from "@mui/icons-material/Pool";
import TvIcon from "@mui/icons-material/Tv";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function HotelCard({
  buttonText,
  browseHotel,
  hotels,
  HotelDetails,
  setOpenSnackbar,
}) {
  let navigate = useNavigate();

  function handleHotelCard(e, selectedHotel) {
    navigate("/hotelDetails", {
      replace: true,
      state: { hotel: selectedHotel },
    });
  }
  function goToCheckout(e, selectedHotel) {
    e.stopPropagation();
    navigate("/checkout", { replace: true, state: { hotel: selectedHotel } });
    console.log(selectedHotel, "selected hotellll");
  }

  function confirmBooking() {
    setOpenSnackbar(true);
  }
  return (
    <Card
      onClick={(e) => (HotelDetails ? handleHotelCard(e, hotels) : null)}
      className={"cursor-pointer"}
    >
      <CardHeader
        title={hotels.name}
        subheader={
          <Stack direction="row" alignItems="center">
            <LocationOnIcon fontSize="small" sx={{ color: "#389393" }} />
            <Typography>{hotels.location}</Typography>
          </Stack>
        }
        action={
          <Stack alignItems="center">
            <Rating
              name="read-only"
              value={hotels.ratings}
              readOnly
              sx={{ color: "#389393" }}
            />
          </Stack>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={hotels.images[0]}
        alt="Paella dish"
      />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          {description}
        </Typography> */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          <SignalWifi4BarIcon />
          <LocalParkingIcon />
          <AcUnitIcon />
          <PoolIcon />
          <TvIcon />
          <KitchenIcon />
        </Stack>
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack alignItems="center">
            <Typography sx={{ fontSize: 12 }}>Price</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <CurrencyRupeeIcon />
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {hotels.price}
              </Typography>
            </Stack>
          </Stack>
          <Button
            variant="contained"
            sx={{ alignSelf: "flex-end" }}
            onClick={(e) =>
              browseHotel ? goToCheckout(e, hotels) : confirmBooking()
            }
          >
            {buttonText}
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
