import React from "react";
import styled from "styled-components";
import WeatherInfoComponent from "./WeatherInfoComponent";

const WeatherInfo = (props) => {
  const {weather}=props;
  return (
    <>
      <WeatherCondition>
        <WeatherLogo src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} />
      </WeatherCondition>
      <Temperature>{`${Math.floor(weather?.main?.temp-273)}°C`}</Temperature>
      <Condition>{weather?.weather[0]?.description}</Condition>
      <Location>{`${weather?.name},${weather?.sys?.country}`}</Location>
      {/* <Divide /> */}
      <WeatherInfoContainer>
        <WeatherInfoComponent name="Feels like" value={`${Math.floor(weather?.main?.feels_like-273)}°C`} />
        <Line />
        <WeatherInfoComponent name="Humidity" value={`${weather?.main?.humidity}%` }/>
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherInfo;

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;
const Temperature = styled.div`
  margin: auto;
  font-size: 50px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 5px auto;
  font-size: 18px;
  font-weight: 50;
`;
const Location = styled.span`
  margin: 5px auto;
  font-size: 18px;
  font-weight: 50;
`;
const WeatherLogo = styled.img`
  width: 130px;
  height: 130px;
  margin:auto;
  
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  border: 1px solid grey;
`;

const Line = styled.div`
  border: 1px solid black;
  height: 16vh;
`;
