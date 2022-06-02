import HotelDetailCard from "../../components/hotelDetailCard";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";

function HotelDetails() {
  return (
    <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
      <HotelDetailCard />
    </Container>
  );
}
export default HotelDetails;
