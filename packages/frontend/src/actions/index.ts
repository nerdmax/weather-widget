import { ActionCreator, actionCreatorFactory } from "typescript-fsa"

const actionCreator = actionCreatorFactory()

export const CHANGE_TITLE: ActionCreator<{
  title: string
}> = actionCreator("CHANGE_TITLE")

export const CHANGE_TEMPERATURE_UNIT: ActionCreator<{
  temperatureUnit: "metric" | "imperial"
}> = actionCreator("CHANGE_TEMPERATURE_UNIT")

export const TOGGLE_WIND_DISPLAY: ActionCreator<{
  displayWind: boolean
}> = actionCreator("TOGGLE_WIND_DISPLAY")

export const SET_WEATHER_DETAILS: ActionCreator<{
  weatherDetails: {
    weatherIcon: string
    city: string
    temperature: number
    windSpeed: number
    windDegree: number
  }
}> = actionCreator("SET_WEATHER_DETAILS")

export const SET_GET_GEOLOCATION_FAILED_FLAG: ActionCreator<
  boolean
> = actionCreator("SET_GET_GEOLOCATION_FAILED_FLAG")

export const SET_GET_WEATHER_FAILED_FLAG: ActionCreator<
  boolean
> = actionCreator("SET_GET_WEATHER_FAILED_FLAG")
