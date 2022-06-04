import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

function SearchBar({
  hotelData,
  setHotelData,
  HotelDataDB,
  rating,
  setRating,
  cityValue,
  setCityValue,
  search,
  setSearch,
}) {
  const [city, setCity] = React.useState([]);
  const [hotelSearchData, setSearchHotelData] = useState([]);

  React.useEffect(() => {
    getCity();
  }, []);

  // React.useEffect(() => {
  //   hotelSearchData && hotelSearchData.length === 0
  //     ? setHotelData(HotelDataDB)
  //     : null;
  // }, [search]);
  const handleChange = (event) => {
    if (event.target.name === "city") {
      setCityValue(event.target.value);
    }
    if (event.target.name === "rating") {
      setRating(event.target.value);
    }
    if (event.target.name === "search") {
      setSearch(event.target.value);
      console.log(event.target.value, "searchedddd valueeee");
    }
  };

  function handleSearch() {
    // let searchedData = hotelData.find((hotel) => hotel.name === search);
    // console.log(searchedData, "searchedddddddddddd");
    // hotelSearchData.push(searchedData);
    // console.log(hotelSearchData, "search dataaa");
    // setSearchHotelData(hotelSearchData);
    // setHotelData(hotelSearchData);
  }
  const getCity = () => {
    let values = [];
    hotelData &&
      hotelData.map((hotels) => {
        values.push(hotels.city);
      });
    let uniqueValues = [...new Set(values)];
    return uniqueValues;
  };
  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      <FormControl sx={{ width: "50vw" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
        <OutlinedInput
          sx={{ bgcolor: "#fff" }}
          id="outlined-adornment-password"
          type="text"
          value={search}
          name="search"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                sx={{ color: "#fff" }}
                onClick={handleSearch}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Search"
        />
      </FormControl>
      <FormControl sx={{ width: "10vw" }}>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cityValue}
          name="city"
          label="City"
          onChange={handleChange}
          sx={{ bgcolor: "#fff" }}
        >
          {getCity() &&
            getCity().length > 0 &&
            getCity().map((cities) => (
              <MenuItem key={cities} value={cities}>
                {cities}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: "12vw" }}>
        <InputLabel id="demo-simple-select-label">Ratings</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rating}
          label="Rating"
          name="rating"
          onChange={handleChange}
          sx={{ bgcolor: "#fff" }}
        >
          <MenuItem value="1">
            <Rating
              name="read-only"
              value={1}
              readOnly
              sx={{ color: "#389393" }}
            />
          </MenuItem>
          <MenuItem value="2">
            <Rating
              name="read-only"
              value={2}
              readOnly
              sx={{ color: "#389393" }}
            />
          </MenuItem>
          <MenuItem value="3">
            <Rating
              name="read-only"
              value={3}
              readOnly
              sx={{ color: "#389393" }}
            />
          </MenuItem>
          <MenuItem value="4">
            <Rating
              name="read-only"
              value={4}
              readOnly
              sx={{ color: "#389393" }}
            />
          </MenuItem>
          <MenuItem value="5">
            <Rating
              name="read-only"
              value={5}
              readOnly
              sx={{ color: "#389393" }}
            />
          </MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export default SearchBar;
