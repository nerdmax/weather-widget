import { PageWrapper } from "@weather-widget/components"
import * as React from "react"
import { hot } from "react-hot-loader"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { State } from "../../store"
import { EditorContainer } from "../EditorContainer"
import { WidgetContainer } from "../WidgetContainer"

const mapStateToProps = (state: State): State => ({ ...state })

type DispatchProps = {}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({})

const Root = (props: State & DispatchProps) => (
  <PageWrapper
    leftComponent={<EditorContainer />}
    rightComponent={<WidgetContainer />}
  />
)

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Root))

export { Root }
