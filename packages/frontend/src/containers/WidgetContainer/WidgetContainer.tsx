import { Widget } from "@weather-widget/components"
import * as React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { State } from "../../store"

const mapStateToProps = (state: State): State => state

type DispatchProps = {}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({})

const WidgetContainer = (props: State & DispatchProps) =>
  props.getGeolocationFailed ? (
    <div>
      Cannot get geolocation, please make sure you have enabled your browser's
      Location.
    </div>
  ) : props.getWeatherFailed ? (
    <div>Cannot get weather, please check later.</div>
  ) : props.weatherDetails ? (
    <Widget
      title={props.title}
      weatherIcon={props.weatherDetails.weatherIcon}
      city={props.weatherDetails.city}
      temperature={props.weatherDetails.temperature}
      temperatureType={props.temperatureUnit}
      windSpeed={props.weatherDetails.windSpeed}
      windDegree={props.weatherDetails.windDegree}
      showWind={props.displayWind}
    />
  ) : (
    <div>Weather is loading...</div>
  )

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer)

export { WidgetContainer as CheckedPages }
