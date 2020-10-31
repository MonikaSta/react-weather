import React, { useState } from "react";
import "./Temperature.css";

export default function UnitsConverter (props){
const [unit, setUnit] = useState('celsius')

function convertToCelsius (event){
    event.preventDefault();
    setUnit ("celsius")
}

function convertToFahrenheit(event){
    event.preventDefault();
    setUnit ("fahrenheit")
}
    if (unit === 'celsius') {
        return (
        <div id="temperature">
          <span id="current-temperature">{props.celsius}</span>
          <span className="units">
              °C | <a href="/" onClick={convertToFahrenheit}>°F</a>
          </span>
        </div>
    )
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
return (
        <div id="temperature">
          <span id="current-temperature">{Math.round(fahrenheit)}</span>
          <span className="units">
              <a href="/" onClick={convertToCelsius}>°C </a>| °F
          </span>
        </div>
    )
    }
} 