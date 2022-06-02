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

export default function HotelCard({ buttonText }) {
  let navigate = useNavigate();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleHotelCard(e) {
    navigate("/hotelDetails", { replace: true });
  }
  function goToCheckout(e) {
    e.stopPropagation();
    navigate("/checkout", { replace: true });
  }
  return (
    <Card onClick={(e) => handleHotelCard(e)}>
      <CardHeader
        title="Taj"
        subheader={
          <Stack direction="row" alignItems="center">
            <LocationOnIcon fontSize="small" sx={{ color: "#389393" }} />
            <Typography>Pune</Typography>
          </Stack>
        }
        action={
          <Stack alignItems="center">
            <Rating
              name="read-only"
              value={5}
              readOnly
              sx={{ color: "#389393" }}
            />
          </Stack>
        }
      />
      <CardMedia component="img" height="194" image={taj} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          As Pune’s first five star hotel, Blue Diamond is a city icon, evoking
          nostalgia of post-party binges, poolside dates and family lunches.
          This landmark in the plush Koregaon Park locality has evolved into a
          luxury boutique hotel with urbane design, top-notch regional cuisine
          and a heartfelt pet friendly policy.
        </Typography>
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
                10000
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
