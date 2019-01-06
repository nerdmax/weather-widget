import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  SET_GET_GEOLOCATION_FAILED_FLAG,
  SET_GET_WEATHER_FAILED_FLAG,
  SET_WEATHER_DETAILS
} from "./actions"
import { Root } from "./containers/Root"
import { reducer } from "./reducers"
import { initialState } from "./store"
import { fetchCurrentWeather, getGeolocation } from "./utils"

const store = createStore(reducer, initialState, composeWithDevTools())

const render = RootElement => {
  ReactDOM.render(
    React.createElement(Provider, { store }, React.createElement(RootElement)),
    document.getElementById("root")
  )

  getGeolocation()
    .then(geolocation =>
      fetchCurrentWeather({
        lat: geolocation.coords.latitude,
        lon: geolocation.coords.longitude
      })
    )
    .then(data => {
      console.log(data)
      store.dispatch(
        SET_WEATHER_DETAILS({
          weatherDetails: {
            city: data.name,
            temperature: data.main.temp,
            weatherIcon: data.weather[0].icon,
            windDegree: data.wind.deg,
            windSpeed: data.wind.speed
          }
        })
      )
    })
    .catch(error => {
      switch (error.errorType) {
        case "GET_GEOLOCATION_ERROR":
          console.log("GET_GEOLOCATION_ERROR")
          store.dispatch(SET_GET_GEOLOCATION_FAILED_FLAG(true))
          break
        case "FETCH_WEATHER_ERROR":
          console.log("FETCH_WEATHER_ERROR")
          store.dispatch(SET_GET_WEATHER_FAILED_FLAG(true))
          break

        default:
          break
      }
      console.log(error)
    })
}

render(Root)
