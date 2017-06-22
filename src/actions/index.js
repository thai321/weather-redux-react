import axios from 'axios';

const API_KEY = process.env.WEATHER_API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // jquery ajax

  // console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request // returning the promise as a payload
  };
}
