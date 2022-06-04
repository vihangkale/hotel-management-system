import { useEffect, useState } from "react";
import HotelCard from "../../components/hotelCard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SearchBar from "../../components/search";
import Grid from "@mui/material/Grid";

const axios = require("axios");

function Home() {
  const [hotelData, setHotelData] = useState([]);
  const [HotelDataDB, setHotelDataDB] = useState([]);
  const [rating, setRating] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [search, setSearch] = useState("");
  const [selectedHotelData, setSelecedHotelData] = useState({});

  useEffect(() => {
    //   number.toLocaleString('en-IN', {
    //     maximumFractionDigits: 2,
    //     style: 'currency',
    //     currency: 'INR'
    // });
    getHotelData();
  }, []);

  let getHotelData = () => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setHotelDataDB(myJson.hotels);
        setHotelData(myJson.hotels);
      });
  };

  return (
    <div>
      <Container maxWidth="xl">
        <Box mt={5} mb={5}>
          <SearchBar
            hotelData={hotelData}
            setHotelData={setHotelData}
            HotelDataDB={HotelDataDB}
            rating={rating}
            setRating={setRating}
            cityValue={cityValue}
            setCityValue={setCityValue}
            search={search}
            setSearch={setSearch}
          />
          <Grid container spacing={2}>
            {hotelData &&
              hotelData.length > 0 &&
              hotelData.filter((hotels) => (
                <Grid key={hotels.uuid} item xs={4}>
                  <HotelCard
                    key={hotels.uuid}
                    buttonText="Book"
                    name={hotels.name}
                    images={hotels.images[0]}
                    location={hotels.location}
                    description={hotels.description}
                    ratings={hotels.ratings}
                    price={hotels.price}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
