import {
  configure,
} from "@storybook/react"
import {
  setOptions
} from "@storybook/addon-options"

setOptions({
  name: "storybook",
  showAddonPanel: false
})

const importAll = stories =>
  stories.keys().forEach(filename => stories(filename))

const loadStories = () =>
  importAll(require.context("../stories", true, /\.stories\.tsx$/))

configure(loadStories, module)
