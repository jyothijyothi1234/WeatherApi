import React, { useState } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";

export default function WeatherApi() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const valueInput = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
const response = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa18b3bd13851e523b1a9e56a1e537e5`
);
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <Grid
      container
      item
      xs={12}
      sx={{ justifyContent: "center", paddingTop: "50px"}}
    >
      <img
        src="https://cdn.zeebiz.com/sites/default/files/2023/05/23/243689-jharkhand-weather-toda.jpg"
        alt="not found"
        style={{position:"absolute"}}
      />

      <Grid item xs={12}  sx={{position:"relative"}}>
        <input
          type="text"
          placeholder="Enter city name"
          style={{ marginRight: "20px" }}
          onChange={valueInput}

        />
        <Button variant="contained" onClick={fetchWeather}>
          Click
        </Button>
      </Grid>
      <Grid item xs={12}   sx={{position:"relative"}}>
        {weatherData.weather && (
          <div>
            <h2>Weather in: {city}</h2>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Temperature: {weatherData.main.temp} </p>
            <p>Humidity: {weatherData.main.humidity}</p>
            <p>Cloud:{weatherData.clouds.all}</p>
          </div>
        )}
      </Grid>
    </Grid>
  );
}


