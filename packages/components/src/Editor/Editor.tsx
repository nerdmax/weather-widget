import classnames from "classnames"
import * as React from "react"
import * as styles from "./Editor.scss"

type EditorProps = {
  title?: string
  handleChangeTitle: (title: string) => void
  temperatureUnit: "metric" | "imperial"
  handleChangeTemperatureUnit: (temperatureUnit: "metric" | "imperial") => void
  showWind: boolean
  handleChangeWind: (displayWind: boolean) => void
}

const Editor = ({
  title,
  handleChangeTitle,
  temperatureUnit,
  handleChangeTemperatureUnit,
  showWind,
  handleChangeWind
}: EditorProps) => {
  const handleChangeTitleEvent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleChangeTitle(event.target.value)
  }

  const handleChangeTemperatureUnitEvent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleChangeTemperatureUnit(event.target.value as "metric" | "imperial")
  }

  const handleChangeWindEvent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleChangeWind(event.target.value === "true")
  }

  return (
    <div>
      <div className={classnames(styles.formItem, styles.formTitle)}>
        <label>Title</label>
        <input
          placeholder={"Title of widget"}
          value={title}
          onChange={handleChangeTitleEvent}
        />
      </div>
      <div className={styles.formItem}>
        <label>Temperature</label>
        <div className={styles.optionsWrapper}>
          <div className={styles.radioBox}>
            <input
              type="radio"
              name="temperature"
              value="metric"
              checked={temperatureUnit === "metric"}
              onChange={handleChangeTemperatureUnitEvent}
              id="temperatureC"
            />
            <label htmlFor="temperatureC">&#8451;</label>
          </div>
          <div className={styles.radioBox}>
            <input
              type="radio"
              name="temperature"
              value="imperial"
              checked={temperatureUnit === "imperial"}
              onChange={handleChangeTemperatureUnitEvent}
              id="temperatureF"
            />
            <label htmlFor="temperatureF">&#8457;</label>
          </div>
        </div>
      </div>
      <div className={styles.formItem}>
        <label>Wind</label>
        <div className={styles.optionsWrapper}>
          <div className={styles.radioBox}>
            <input
              type="radio"
              name="wind"
              value="true"
              checked={showWind}
              onChange={handleChangeWindEvent}
              id="windOn"
            />
            <label htmlFor="windOn">On</label>
          </div>
          <div className={styles.radioBox}>
            <input
              type="radio"
              name="wind"
              value="false"
              checked={!showWind}
              onChange={handleChangeWindEvent}
              id="windOff"
            />
            <label htmlFor="windOff">Off</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Editor }
