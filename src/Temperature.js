import React, { useState } from "react";
import "./Temperature.css"


export default function Temperature(props) {
   // const[city, setCity] = useState(props.defaultCity);
    //const[weather, useWeather] = useState({load:false});
return (
    <div className="App">
      <div className="weatherApp">
        <div className="row">
          <div className="col-8">
            <form id="search-form">
              <input
                type="search"
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                id="city-input"
                placeholder="Search for a city..."
              />
            </form>
          </div>
          <div className="col-4">
            <button type="button" className="btn btn-outline-light" id="button">
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
        <h1>
          <div id="current-location"></div>
        </h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <span id="display-date"></span>
            </div>
            <div className="col-6">
              <span id="display-time"></span>
            </div>
          </div>
        </div>
        <div id="temperature">
          <span id="current-temperature"></span>
          <span className="units">
            <a href="#" id="temperature-c" className="active">
              °C
            </a>
            |
            <a href="#" id="temperature-f" className="active">
              °F
            </a>
          </span>
        </div>
        <div id="description"></div>
        <div className="container" id="parameters">
          <div className="row">
            <div className="col-4">
              <img
                src="https://static.thenounproject.com/png/1001987-200.png"
                alt="humidity icon"
                id="weather-icons"
              />
              Humidity:
              <div id="humidity"></div>
            </div>
            <div className="col-4 m-40">
              <img
                id="icon"
                src="https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png"
                alt="weather"
              />
            </div>
            <div className="col-4">
              <img
                src="https://img.icons8.com/ios/452/wind.png"
                alt="wind icon"
                id="weather-icons"
              />
              Wind:
              <div id="wind"></div>
            </div>
          </div>
        </div>
        <div className="row weather-forecast" id="forecast"></div>
      </div>
      </div>
)}