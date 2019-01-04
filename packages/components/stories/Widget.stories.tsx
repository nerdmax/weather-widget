// tslint:disable:no-console
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { Widget } from "../src"

storiesOf("Widget", module).add("sample", () => (
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
))
