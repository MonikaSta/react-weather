import React, { useState } from "react";
import "./Temperature.css";
import axios from "axios";


export default function Temperature(props) {
   const[city, setCity] = useState(props.defaultCity);
   const[weather, setWeather] = useState({load:false});

function showTemperature (response){
    setWeather({
        load:true,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].description,
        iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        city: response.data.name
    })
    
}

function handleSearch(event){
    event.preventDefault();
    search();
  }

  function search(){
    const apiKey = "980705a0ba4bf0987a707dd1c07fbc80";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature);
}

function updateCity(event){
    setCity(event.target.value);
}
if (weather.load) {
    return (
    <div className="App">
      <div className="weatherApp">
        <div className="row">
          <div className="col-8">
            <form id="search-form" onSubmit={handleSearch}>
              <input
                type="search"
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                id="city-input"
                placeholder="Search for a city..."
                onChange={updateCity}
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
          <div id="current-location">{weather.city}</div>
        </h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <span id="display-date">Monday, Oct 19</span>
            </div>
            <div className="col-6">
              <span id="display-time">14:43</span>
            </div>
          </div>
        </div>
        <div id="temperature">
          <span id="current-temperature">{weather.temperature}</span>
          <span className="units">
              °C
            |

              °F
            
          </span>
        </div>
        <div id="description">{weather.description}</div>
        <div className="container" id="parameters">
          <div className="row">
            <div className="col-4">
              <img
                src="https://static.thenounproject.com/png/1001987-200.png"
                alt="humidity icon"
                id="weather-icons"
              />
              Humidity:<br />
              {weather.humidity}%
              <div id="humidity"></div>
            </div>
            <div className="col-4 m-40">
              <img
                id="icon"
                src={weather.iconUrl}
                alt={weather.description}
              />
            </div>
            <div className="col-4">
              <img
                src="https://img.icons8.com/ios/452/wind.png"
                alt="wind icon"
                id="weather-icons"
              />
              Wind:<br />
              {weather.wind}km/h
              <div id="wind"></div>
            </div>
          </div>
        </div>
        <div className="row weather-forecast" id="forecast"></div>
      </div>
      </div>
);
}else{search();
    return "Loading..."
}
}