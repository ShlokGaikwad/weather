import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const CityComponent = (props) => {
  const { setCity, fetchWeather,city } = props;
  return (
    <>
      <WeatherLogo src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-25.png"></WeatherLogo>
      <CityLabel>Find Weather Of Your City</CityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit"><FiSearch/></button>
      </SearchBox>
    </>
  );
};

export default CityComponent;

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const CityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin: 12px auto;
  border: black solid 2px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }

  & button {
    padding: 10px;
    font-size: 18px;
    border: none;
    outline: none;
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;
