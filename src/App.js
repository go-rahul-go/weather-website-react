import { useState } from "react";
import MainCard from "./components/MainCard";
import HomePage from "./components/HomePage";
import "./style.css"

function App() {
  const [sevenDays, updateSevenDays] = useState([])
  const [location, updateLocation] = useState("");
  const [current, updateCurrent] = useState({})
  const [showMain,updateMain] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!location)
        {
          updateMain(false)
          alert("enter a valid location")
        }
      else {
        let resp = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5152ef6b1d504813a0b54343232408&q=${location}&days=7&aqi=no&alerts=no`)

        let result = await resp.json();
        let upcomingForecast = await result.forecast.forecastday;

        let city = {
          name: result.location.name,
          temp: result.current.temp_c,
          feelsLike: result.current.feelslike_c,
          windSpeed: result.current.wind_kph,
          condition: result.current.condition.text,
          humidity: result.current.humidity,
          icon: result.current.condition.icon,
          country: result.location.country,
          state:result.location.region
        }
        updateLocation(location)
        updateSevenDays(upcomingForecast)
        updateCurrent(city)
        // console.log(result)
        console.log(sevenDays)
        // console.log(current)
        updateMain(true)
      }
    }
    catch (e) {
      console.log("something went wrong")
    }


  }


  return (
    <>
      <div id="heading">
        <h1>Weather Today</h1>
        <div className="searchbar">
          <form onSubmit={handleSubmit}>
            <input type="text" id="location" value={location} onChange={e => updateLocation(e.target.value)} placeholder="enter city"/>
            <button type="submit" ><i className="fa fa-search"></i></button>
          </form>
        </div>
      </div>

      {
        (showMain) ? <MainCard city={current} future={sevenDays}/> : <HomePage/>
 
      }
      
    </>)
}

export default App;
