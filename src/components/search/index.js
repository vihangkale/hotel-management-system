import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

function SearchBar({
  hotelData,
  rating,
  setRating,
  cityValue,
  setCityValue,
  search,
  setSearch,
}) {
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

  const getCity = () => {
    let values = [];
    hotelData &&
      hotelData.forEach((hotels) => {
        values.push(hotels.city);
      });
    let uniqueValues = [...new Set(values)];
    return uniqueValues;
  };

  function clearFilters() {
    setRating("");
    setCityValue("");
  }
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
      <Button variant="outlined" onClick={() => clearFilters()}>
        Clear filters
      </Button>
    </Stack>
  );
}

export default SearchBar;
