import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiCommand } from "react-icons/fi";
import "./style.css";

const CityComponent = (props) => {
  const { setCity, fetchWeather, city, loading } = props;

  return (
    <>
      <WeatherLogo src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-25.png"></WeatherLogo>
      <CityLabel>
        {loading ? `finding weather of ${city} ` : "Find Weather Of Your City"}
      </CityLabel>
      <SearchBox
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeather(city);
        }}
      >
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">
          <FiCommand className={loading ? "loading-icon" : ""} />
        </button>
      </SearchBox>
    </>
  );
};

export default CityComponent;

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 20px auto;
`;

const CityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const animate = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(720deg);
}
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
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;
