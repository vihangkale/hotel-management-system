import IconButton from "@mui/material/IconButton";
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

function SearchBar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      <FormControl sx={{ width: "50vw" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
        <OutlinedInput
          sx={{ bgcolor: "#fff" }}
          id="outlined-adornment-password"
          type="text"
          //value={values.password}
          // onChange={handleChange())}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                sx={{ color: "#fff" }}
                // onClick={handleClickShowPassword}
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
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{ bgcolor: "#fff" }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "10vw" }}>
        <InputLabel id="demo-simple-select-label">Ratings</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{ bgcolor: "#fff" }}
        >
          <MenuItem value="1">One</MenuItem>
          <MenuItem value="2">Two</MenuItem>
          <MenuItem value="3">Three</MenuItem>
          <MenuItem value="4">Four</MenuItem>
          <MenuItem value="5">Five</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export default SearchBar;
