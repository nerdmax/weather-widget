type State = {
  title: string
  temperatureUnit: "metric" | "imperial"
  displayWind: boolean
  weatherDetails?: {
    weatherIcon: string
    city: string
    temperature: number
    windSpeed: number
    windDegree: number
  }
  getGeolocationFailed: boolean
  getWeatherFailed: boolean
}

const initialState: State = {
  title: "",
  temperatureUnit: "metric",
  displayWind: true,
  getGeolocationFailed: false,
  getWeatherFailed: false
}

export { State, initialState }
