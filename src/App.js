import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import CurrentLocation from "./components/CurrentLocation";
import WeatherInfo from "./components/WeatherInfo";

const API_KEY = "13ec29720fa55c2c114c53a3a9694387";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState('');
  const [found, setFound] = useState(false);
  // const [loading, setloading] = useState(false);

  // useEffect(() => {
  //   setloading(true);
  //   setTimeout(() => {
  //     setloading(false);
  //   }, 5000);
  // }, []);

  useEffect(()=>{
    setCity("")
  })

  const fetchWeather = async (CurrCity) => {
    // e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${CurrCity}&appid=${API_KEY}`
      );
      setWeather(response.data);

      console.log(response.data);
      setFound(true);
    } catch {
      setFound(false);
    }
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather && found ? (
        <WeatherInfo weather={weather} setFound={setFound} />
      ) : (
        <>
          <CityComponent
            setCity={setCity}
            city={city}
            fetchWeather={fetchWeather}
            weather={weather}
          />
          <div>or</div>
          <CurrentLocation setCity={setCity} setFound={setFound} fetchWeather={fetchWeather}/>
        </>
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
  background-color: #f8f8ff;
  font-family: "DM Sans", sans-serif;

  > div {
    padding-bottom: 10px;
  }
`;

const AppLabel = styled.span`
  color: blue;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: -22px;
`;
