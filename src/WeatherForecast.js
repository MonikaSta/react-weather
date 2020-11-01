import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview"


export default function WeatherForecast (props){
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);


function handleForecastResponse (response){
    console.log(response.data)
    setForecast(response.data);
    setLoaded(true);

}

if (loaded && props.city === forecast.city.name) {
    return (
        <div className ="WeatherForecast row">
            
            <WeatherForecastPreview data={forecast.list[0]} />
            <WeatherForecastPreview data={forecast.list[1]} />
            <WeatherForecastPreview data={forecast.list[2]} />
            <WeatherForecastPreview data={forecast.list[3]} />
            
        </div>
        )
} else {  
    const apiKey = "5aceae49f44af75d3d4a49f0b46e516f";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`    
    axios.get(url).then(handleForecastResponse);

    return null;
}
}