import * as React from "react"
import * as styles from "./Widget.scss"

type WidgetProps = {
  title: string
  weatherIcon: string
  city: string
  temperature: number
  temperatureType: "metric" | "imperial"
  windSpeed: number
  windDegree: number
  showWind: boolean
}

const degToCompass = (num: number) => {
  const val = Math.floor(num / 22.5 + 0.5)
  const arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW"
  ]
  return arr[val % 16]
}

const kelvinToCelsius = (kelValue: number) => Math.round(kelValue - 273.15)

const kelvinTofahrenheit = (kelValue: number) =>
  Math.round((kelValue - 273.15) * 1.8 + 32)

const Widget = ({
  title,
  weatherIcon,
  city,
  temperature,
  temperatureType,
  windSpeed,
  windDegree,
  showWind
}: WidgetProps) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>{title || "TITLE OF WIDGET"}</div>
    <div className={styles.weatherWrapper}>
      <div className={styles.weatherIconImgWrapper}>
        <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} />
      </div>
      <div className={styles.weatherDetails}>
        <div className={styles.city}>{city}</div>
        <div className={styles.temperature}>
          {temperatureType === "metric"
            ? kelvinToCelsius(temperature).toString()
            : kelvinTofahrenheit(temperature).toString()}&#730;
        </div>
        {showWind ? (
          <div>
            <b>Wind</b>&nbsp;&nbsp;{degToCompass(windDegree)} {windSpeed}km/h
          </div>
        ) : null}
      </div>
    </div>
  </div>
)

export { Widget }
