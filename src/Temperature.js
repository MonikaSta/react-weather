import React, { useState } from "react";
import "./Temperature.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Temperature(props) {
   const[city, setCity] = useState(props.defaultCity);
   const[weather, setWeather] = useState({load:false});

function showTemperature (response){
  console.log(response.data);
    setWeather({
        load:true,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].description,
        iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        city: response.data.name,
        date: new Date(response.data.dt * 1000)
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
            </button>
          </div>
          </div>
      <WeatherInfo data={weather} />
      </div>
      </div>
);
}else{search();
    return "Loading..."
}
}