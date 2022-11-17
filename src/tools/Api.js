import axios from 'axios';
const API_KEY = '0deed939492f10fa02b7b267dbfb9d49';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';

export default async function fetchTrending() {
  const config = {
    method: 'get',
    url: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  };

  const response = await axios(config);

  const data = response.data;
  return data;
}
