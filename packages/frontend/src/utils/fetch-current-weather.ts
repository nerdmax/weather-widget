import "cross-fetch"

const fetchCurrentWeather = async ({
  lat,
  lon
}: {
  lat: number
  lon: number
}): Promise<any> =>
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac70fb3a8619b56bb9600b92d60084e1`,
    {
      method: "POST"
    }
  ).then(res => {
    if (res.status >= 400) {
      return Promise.reject({ errorType: "FETCH_WEATHER_ERROR", error: res })
    }
    return res.json()
  })

export { fetchCurrentWeather }
