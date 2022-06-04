import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import taj from "../../assets/taj.jpg";
import { useEffect, useState } from "react";
import HotelCard from "../../components/hotelCard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SearchBar from "../../components/search";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
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

const HotelDetailCard = () => {
  let navigate = useNavigate();

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      author: "@helloimnik",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      author: "@nolanissac",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      author: "@hjrc33",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      author: "@tjdragotta",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      author: "@katie_wasserman",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      author: "@silverdalex",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      author: "@peterlaster",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      author: "@southside_customs",
    },
  ];
  function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  function goBackToHotelHome() {
    navigate("/home", { replace: true });
  }
  return (
    <div>
      <Stack
        classes="cursor-pointer"
        direction="row"
        spacing={1}
        alignItems="flex-start"
        onClick={(e) => goBackToHotelHome()}
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
            <ImageListItem key={item.title} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                position="top"
                actionPosition="left"
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
            Taj
          </Typography>
          <Rating
            name="read-only"
            value={5}
            readOnly
            sx={{ color: "#389393" }}
          />
          <Typography variant="body2" color="text.secondary">
            As Pune’s first five star hotel, Blue Diamond is a city icon,
            evoking nostalgia of post-party binges, poolside dates and family
            lunches. This landmark in the plush Koregaon Park locality has
            evolved into a luxury boutique hotel with urbane design, top-notch
            regional cuisine and a heartfelt pet friendly policy.
          </Typography>
          <Stack direction="row" alignItems="center">
            <LocationOnIcon fontSize="small" sx={{ color: "#389393" }} />
            <Typography>Pune</Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};
export default HotelDetailCard;
