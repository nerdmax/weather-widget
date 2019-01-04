// tslint:disable:no-console
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { Editor } from "../src"

const logValue = newValue => {
  console.log(newValue)
}

storiesOf("Editor", module).add("sample", () => (
  <Editor
    title={""}
    handleChangeTitle={logValue}
    temperatureUnit={"metric"}
    handleChangeTemperatureUnit={logValue}
    showWind={true}
    handleChangeWind={logValue}
  />
))
