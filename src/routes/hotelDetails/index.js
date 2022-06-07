import HotelDetailCard from "../../components/hotelDetailCard";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";
import * as React from "react";

function HotelDetails() {
  console.log("navigation");

  const location = useLocation();

  const selectedHotel = location.state.hotel;
  return (
    <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
      <HotelDetailCard hotels={selectedHotel} />
    </Container>
  );
}
export default HotelDetails;
