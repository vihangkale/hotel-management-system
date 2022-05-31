import { useEffect, useState } from "react";
import HotelCard from "../../components/hotelCard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SearchBar from "../../components/search";

const axios = require("axios");

function Home() {
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search",
      params: {
        checkin_date: "2022-03-26",
        checkout_date: "2022-03-27",
        sort_order: "STAR_RATING_HIGHEST_FIRST",
        destination_id: "1708350",
        adults_number: "1",
        locale: "en_US",
        currency: "USD",
        children_ages: "4,0,15",
        price_min: "10",
        star_rating_ids: "3,4,5",
        accommodation_ids: "20,8,15,5,1",
        price_max: "500",
        page_number: "1",
        theme_ids: "14,27,25",
        amenity_ids: "527,2063",
        guest_rating_min: "4",
      },
      headers: {
        "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
        "X-RapidAPI-Key": "be3afdfbc7msh41da23c16a3b29bp1fe8eejsn78a254c295db",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        <Box mt={5} mb={5}>
          <SearchBar />
          <HotelCard />
        </Box>
      </Container>
    </div>
  );
}

export default Home;
