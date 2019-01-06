# Weather Widget

This is Max Liu's solutions to BLUE's technical test: <https://ffxblue.github.io/interview-tests/test/weather-widget/)>

- [Weather Widget](#weather-widget)
  - [Set up instructions](#set-up-instructions)
  - [About the project structure](#about-the-project-structure)
  - [Assumptions](#assumptions)

## Set up instructions

To check the final results. Run `yarn frontend start` and visit <http://localhost:8080>.

To check the components' storybook. Run `yarn components start` and visit <http://localhost:9001>.

## About the project structure

This project is using yarn's workspace. 

> **Note:** For more information on yarn workspaces, see the [yarn docs](https://yarnpkg.com/lang/en/docs/workspaces/).

It has two workspace and the details of those workspace can be found in their own README file.

## Assumptions

I am using the weather icon from [Open Weather Map API](https://openweathermap.org/weather-conditions) so the weather conditions might look different from the design.

I set the widget width to the most common small desktop's width which is 960px and it's different from the design so the text size might look different from the design.

I was not provided with the fonts that this design is using so I just use the `Helvetica` as the font family. The font might look different from the design.
