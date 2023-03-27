import React from "react";
import styled from "styled-components";

const WeatherInfoComponent = (props) => {
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[props.name]} />
      <InfoLabel>
        {props.value}
        <div>{props.name}</div>
      </InfoLabel>
    </InfoContainer>
  );
};

export default WeatherInfoComponent;

export const WeatherInfoIcons = {
  "Feels like":
    "https://www.freeiconspng.com/thumbs/temperature-icon-png/temperature-icon-png-1.png",
  Humidity: "https://cdn-icons-png.flaticon.com/512/1582/1582886.png",
};

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoLabel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & div {
    font-size: 16px;
    text-transform: capitalize;
  }
`;
const InfoIcon = styled.img`
  width: 45px;
  height: 45px;
`;
