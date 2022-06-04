import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Rating from "@mui/material/Rating";
import taj from "../../assets/taj.jpg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SignalWifiStatusbar4BarIcon from "@mui/icons-material/SignalWifiStatusbar4Bar";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import { useNavigate } from "react-router-dom";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import PoolIcon from "@mui/icons-material/Pool";
import TvIcon from "@mui/icons-material/Tv";
import KitchenIcon from "@mui/icons-material/Kitchen";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AcUnitIcon from "@mui/icons-material/AcUnit";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function HotelCard({
  buttonText,
  name,
  images,
  location,
  description,
  ratings,
  price,
}) {
  let navigate = useNavigate();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleHotelCard(e) {
    navigate("/hotelDetails", { replace: true });
    history.push({
      pathname: "/hotelDetails",
      state: data,
    });
  }
  function goToCheckout(e) {
    e.stopPropagation();
    navigate("/checkout", { replace: true });
    history.push({
      pathname: "/checkout",
      state: data,
    });
  }
  return (
    <Card onClick={(e) => handleHotelCard(e)}>
      <CardHeader
        title={name}
        subheader={
          <Stack direction="row" alignItems="center">
            <LocationOnIcon fontSize="small" sx={{ color: "#389393" }} />
            <Typography>{location}</Typography>
          </Stack>
        }
        action={
          <Stack alignItems="center">
            <Rating
              name="read-only"
              value={ratings}
              readOnly
              sx={{ color: "#389393" }}
            />
          </Stack>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={images}
        alt="Paella dish"
      />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          {description}
        </Typography> */}
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
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack alignItems="center">
            <Typography sx={{ fontSize: 12 }}>Price</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <CurrencyRupeeIcon />
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {price}
              </Typography>
            </Stack>
          </Stack>
          <Button
            variant="contained"
            sx={{ alignSelf: "flex-end" }}
            onClick={(e) => goToCheckout(e)}
          >
            {buttonText}
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
