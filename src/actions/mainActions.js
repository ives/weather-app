
export function fetchData(apiData) {
  return {
      type: 'FETCH_WEATHER_SUCCESS',
      payload: apiData
  }
}

export function fetchDataError(errorDetails) {
  return {
      type: 'FETCH_WEATHER_ERROR',
      message: errorDetails
  }
}
