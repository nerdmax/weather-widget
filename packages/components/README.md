# Weather-widget: Components

This workspace is responsible for providing the individual React components which comprise the UI of the frontend javascript applications.

- [Weather-widget: Components](#weather-widget-components)
  - [Package scripts](#package-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn build`](#yarn-build)
    - [`yarn build-css`](#yarn-build-css)
    - [`yarn clean-css`](#yarn-clean-css)
    - [`yarn storybook`](#yarn-storybook)

## Package scripts

### `yarn start`

Run `yarn build --watch` & `yarn storybook` concurrently. This script is for development. If you want to work on this package, just run this script and it will start the hot loading dev server and build CSS files in watch mode.

### `yarn build`

Runs `yarn build-css`. This script will compile the CSS code.

### `yarn build-css`

Build type declarations for CSS modules in current package. Add `--watch` for watching mode.

### `yarn clean-css`

Clear and rebuild all CSS module type declarations.

### `yarn storybook`

Runs a local [Storybook](https://storybook.js.org/) server on port `9001`, serving stories from the `./stories` directory. Stories are isolated development environments for building react components, with all data and handler functions mocked.
