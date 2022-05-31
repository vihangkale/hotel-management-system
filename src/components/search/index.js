import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <FormControl sx={{ m: 1, width: "50vw" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type="text"
        sx={{ bgcolor: "#fff" }}
        //value={values.password}
        // onChange={handleChange("password")}
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
        label="Password"
      />
    </FormControl>
  );
}

export default SearchBar;
