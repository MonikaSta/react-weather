import React from "react";
import CurrentDate from "./CurrentDate";
import "./Temperature.css";
import UnitsConverter from "./UnitsConverter";
import "./WeatherInfo.css"

export default function WeatherInfo(props){
return (
<div className="weatherInfo">
    
        <h1>
          <div id="current-location">{props.data.city}</div>
        </h1>
        <hr />
          <CurrentDate date={props.data.date} />
          <UnitsConverter celsius={props.data.temperature} />
        <div id="description">{props.data.description}</div>
        <div className="container" id="parameters">
          <div className="row">
            <div className="col-4">
              <img
                src="https://static.thenounproject.com/png/1001987-200.png"
                alt="humidity icon"
                id="weather-icons"
              />
              Humidity:<br />
              {props.data.humidity}%
              <div id="humidity"></div>
            </div>
            <div className="col-4">
            <img
                id="main-icon"
                src={props.data.iconUrl}
                alt={props.data.description}
              />
            </div>
            <div className="col-4">
              <img
                src="https://img.icons8.com/ios/452/wind.png"
                alt="wind icon"
                id="weather-icons"
              />
              Wind:<br />
              {props.data.wind}km/h
              <div id="wind"></div>
            </div>
          </div>
        </div>
        <div className="row weather-forecast" id="forecast"></div>
        </div>)
}