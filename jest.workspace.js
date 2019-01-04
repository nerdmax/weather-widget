module.exports = {
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleNameMapper: {
    "\\@weather-widget/(.*)": "<rootDir>/../$1/src"
  },
  moduleFileExtensions: ["json", "js", "ts"]
}
