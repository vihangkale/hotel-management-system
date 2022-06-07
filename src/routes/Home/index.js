import HotelCard from "../../components/hotelCard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SearchBar from "../../components/search";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";

function Home({ AuthContext }) {
  const [hotelData, setHotelData] = useState([]);
  const [rating, setRating] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
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
              hotelData
                .filter((hotels) => {
                  return (
                    hotels.city
                      .toLowerCase()
                      .indexOf(cityValue.toLowerCase()) >= 0 &&
                    hotels.name.toLowerCase().indexOf(search.toLowerCase()) >=
                      0 &&
                    (rating !== "" ? hotels.ratings == rating : true)
                  );
                })
                .map((hotels) => (
                  <Grid key={hotels.uuid} item xs={12} sm={4} md={4} lg={4}>
                    <HotelCard
                      key={hotels.uuid}
                      hotels={hotels}
                      buttonText="Book"
                      HotelDetails={true}
                      browseHotel={true}
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
