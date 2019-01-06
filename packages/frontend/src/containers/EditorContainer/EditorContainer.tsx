import { Editor } from "@weather-widget/components"
import * as React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import {
  CHANGE_TEMPERATURE_UNIT,
  CHANGE_TITLE,
  TOGGLE_WIND_DISPLAY
} from "../../actions"
import { State } from "../../store"

const mapStateToProps = (state: State): State => state

type DispatchProps = {
  handleChangeTitle: (title: string) => void
  handleChangeTemperatureUnit: (temperatureUnit: "metric" | "imperial") => void
  handleChangeWind: (displayWind: boolean) => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleChangeTitle: title => {
    dispatch(CHANGE_TITLE({ title }))
  },
  handleChangeTemperatureUnit: temperatureUnit => {
    dispatch(CHANGE_TEMPERATURE_UNIT({ temperatureUnit }))
  },
  handleChangeWind: displayWind => {
    dispatch(TOGGLE_WIND_DISPLAY({ displayWind }))
  }
})

const EditorContainer = (props: State & DispatchProps) => (
  <Editor
    title={props.title}
    handleChangeTitle={props.handleChangeTitle}
    temperatureUnit={props.temperatureUnit}
    handleChangeTemperatureUnit={props.handleChangeTemperatureUnit}
    showWind={props.displayWind}
    handleChangeWind={props.handleChangeWind}
  />
)

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer)

export { EditorContainer as CheckedPages }
