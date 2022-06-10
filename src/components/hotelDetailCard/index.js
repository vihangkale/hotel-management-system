import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Stack } from "@mui/material";
import PoolIcon from "@mui/icons-material/Pool";
import TvIcon from "@mui/icons-material/Tv";
import KitchenIcon from "@mui/icons-material/Kitchen";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
const HotelDetailCard = ({ hotels }) => {
  let navigate = useNavigate();
  const itemData = hotels.images;

  function goBackToHotelHome() {
    navigate("/home", { replace: true });
  }
  return (
    <div>
      <Stack
        className="cursor-pointer"
        direction="row"
        spacing={1}
        alignItems="flex-start"
        onClick={() => goBackToHotelHome()}
        component="a"
      >
        <ArrowBackIosIcon />
        <Typography>Back</Typography>
      </Stack>
      <ImageList
        sx={{
          width: "100%",
          height: 300,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
        }}
        rowHeight={200}
        gap={1}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;
          return (
            <ImageListItem cols={cols} rows={rows}>
              <img
                src={"https://source.unsplash.com/random/?hotel"}
                alt="no img"
                loading="lazy"
                width="250px"
                height="200"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
      <Card sx={{ width: "100%" }}>
        <CardContent>
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

          <Typography gutterBottom variant="h5" component="div">
            {hotels.name}
          </Typography>
          <Rating
            name="read-only"
            value={hotels.ratings}
            readOnly
            sx={{ color: "#389393" }}
          />
          <Typography variant="body2" color="text.secondary">
            {hotels.description}
          </Typography>
          <Stack direction="row" alignItems="center">
            <LocationOnIcon fontSize="small" sx={{ color: "#389393" }} />
            <Typography>{hotels.location}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};
export default HotelDetailCard;
