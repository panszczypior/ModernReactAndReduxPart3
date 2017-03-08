import axios from 'axios';

const API_KEY = '969b8cea5525504887f174aaf7887bcf';
const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const fetchWeather = (city) => {

  const url = `${ROOT_URL}&q=${city},pl`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};

export {
  fetchWeather as default,
  fetchWeather,
  FETCH_WEATHER,
};
