import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
const API_KEY = "13ec29720fa55c2c114c53a3a9694387";
const base='https://api.openweathermap.org/data/2.5/'
const CurrentLocation = ({setCity, setFound,fetchWeather}) => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const fetchWeatherViaLocation = async (e) => {
    try{
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=${API_KEY}`
      );
      console.log(response.data);
      fetchWeather(response.data.name);
      setCity(response.data.name)
      setFound(true);
    }
    catch{
        console.log("error");
      setFound(false);
    }
    
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({ code: 0, message: "Geolocation not supported" });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return (
    <>
        <Button onClick={(e)=>fetchWeatherViaLocation()}>Get Device Location </Button>
      
    </>
  );
};

export default CurrentLocation;

const Button = styled.button`
  padding: 8px;
  font-size: 18px;
  border-radius: 5px;
  outline: none;
  color: white;
  background-color: black;
  cursor: pointer;
  width: 66%;
`;


