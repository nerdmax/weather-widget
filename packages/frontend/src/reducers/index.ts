import * as moment from "moment"
import { Reducer } from "redux"
import { isType } from "typescript-fsa"
import * as actions from "../actions"
import { initialState, State } from "../store"

const reducer: Reducer<State> = (state = initialState, action): State => {
  if (isType(action, actions.CHANGE_TITLE)) {
    return { ...state, title: action.payload.title }
  }

  if (isType(action, actions.CHANGE_TEMPERATURE_UNIT)) {
    return { ...state, temperatureUnit: action.payload.temperatureUnit }
  }

  if (isType(action, actions.TOGGLE_WIND_DISPLAY)) {
    return { ...state, displayWind: action.payload.displayWind }
  }

  if (isType(action, actions.SET_WEATHER_DETAILS)) {
    return { ...state, weatherDetails: action.payload.weatherDetails }
  }

  if (isType(action, actions.SET_GET_GEOLOCATION_FAILED_FLAG)) {
    return { ...state, getGeolocationFailed: action.payload }
  }

  if (isType(action, actions.SET_GET_WEATHER_FAILED_FLAG)) {
    return { ...state, getWeatherFailed: action.payload }
  }

  return state
}

export { reducer }
