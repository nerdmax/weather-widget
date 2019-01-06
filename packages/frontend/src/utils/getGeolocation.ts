const getGeolocation = (): Promise<Position | any> =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  }).catch(error =>
    Promise.reject({ errorType: "GET_GEOLOCATION_ERROR", error }))

export { getGeolocation }
