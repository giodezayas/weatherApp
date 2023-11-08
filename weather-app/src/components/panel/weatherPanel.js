import React, { useState } from "react";
import { API_URL,urlForecast,cityURL } from "../../api";
import Search from '../search/search';
import Card from "../card/card";
const WeatherPanel = ({ onSearchChange }) => {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [show, setShow] = useState(false); 
  const [location, setLocation] = useState("");


  const getLocation= async(loc)=>{
    setLoading(true)
    setLocation(loc)
    let URL = API_URL + cityURL + loc
    await fetch(URL)
        .then((response)=>{
            if(!response.ok) throw {response}
            return response.json()
        }).then((weatherData)=>{
            console.log(weatherData)
            setWeather(weatherData)
        }).catch(error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        })
    let FORECASTURL = urlForecast + cityURL + loc
    await fetch(FORECASTURL)
        .then((response)=>{
            if(!response.ok) throw {response}
            return response.json()
        }).then((forecastData)=>{
            console.log(forecastData)
            setForecast(forecastData)
            setLoading(false)
            setShow(true)
        }).catch(error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        })
    
  }
  return (
    <React.Fragment>
        <Search newLocation={getLocation}/>
        <Card
            showData={show}
            loadingData={loading}
            weather={weather}
            forecast={forecast}
        />
    </React.Fragment>
      

  );
};

export default WeatherPanel;