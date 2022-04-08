import { useEffect, useState } from 'react'
import axios from 'axios'

function Weather({ lat, lon }) {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        console.log(response.data)
        setWeather(response.data)
      })
  }, [])

  return (
    <div>
      <h3>Weather</h3>
      {Object.keys(weather).length !== 0 && (
        <>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            width="100px"
            height="100px"
          />
          <p>Wind: {weather.wind.speed} m/s</p>
        </>
      )}
    </div>
  )
}

export default Weather
