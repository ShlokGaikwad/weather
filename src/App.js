import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherInfo from "./components/WeatherInfo";

const API_KEY = "13ec29720fa55c2c114c53a3a9694387";

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    setWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Weather App</AppLabel>

      {weather ? (
        <WeatherInfo weather={weather}/>
      ) : (
        <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background-color: white;
  font-family: "DM Sans", sans-serif;
`;

const AppLabel = styled.span`
  color: blue;
  font-size: 18px;
  font-weight: bold;
`;
