# Weather-widget: Frontend

This workspace is responsible for the frontend of this project. It can generate some static files to host.

- [Weather-widget: Frontend](#weather-widget-frontend)
  - [Package scripts](#package-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn dev`](#yarn-dev)
    - [`yarn build`](#yarn-build)

## Package scripts

### `yarn start`

Run `yarn dev`. This script is for development. If you want to work on this package, just run this script.

### `yarn dev`

Runs `webpack-dev-server --config webpack.dev.js`. This script will start the webpack's hot loading dev server.

### `yarn build`

Runs `shx rm -rf '.build/*' && webpack --config webpack.prod.js`. This script will remove all the files under .build folder and use webpack to generate some static files for production.
