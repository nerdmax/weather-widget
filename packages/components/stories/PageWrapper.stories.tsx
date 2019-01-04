// tslint:disable:no-console
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { PageWrapper } from "../src"
import { Editor } from "../src"
import { Widget } from "../src"

const logValue = newValue => {
  console.log(newValue)
}

const leftDiv = (
  <Editor
    title={""}
    handleChangeTitle={logValue}
    temperatureUnit={"metric"}
    handleChangeTemperatureUnit={logValue}
    showWind={true}
    handleChangeWind={logValue}
  />
)

const rightDiv = (
  <Widget
    title={"Test title"}
    weatherIcon={"10d"}
    city={"test city"}
    temperature={289.5}
    temperatureType={"metric"}
    windSpeed={3333}
    windDegree={187.002}
    showWind={true}
  />
)

storiesOf("PageWrapper", module).add("sample", () => (
  <PageWrapper leftComponent={leftDiv} rightComponent={rightDiv} />
))
