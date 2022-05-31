import { useEffect, useState } from "react";
import HotelCard from "../../components/hotelCard";
// import Navigation from "../../components/navigation";

const axios = require("axios");

function Home() {
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/get-meta-data",
      headers: {
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
        "X-RapidAPI-Key": "be3afdfbc7msh41da23c16a3b29bp1fe8eejsn78a254c295db",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <HotelCard />
    </div>
  );
}

export default Home;
