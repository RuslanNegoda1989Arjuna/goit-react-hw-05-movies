import axios from 'axios';
const API_KEY = '0deed939492f10fa02b7b267dbfb9d49';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
const URL_GENRES = 'https://api.themoviedb.org/3/genre/movie/list?';
const URL_CAST = 'https://api.themoviedb.org/3/movie/';

export default async function fetchTrending() {
  const config = {
    method: 'get',
    url: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  };

  const response = await axios(config);

  const data = response.data.results;
  return data;
}

export async function fetchGenres() {
  const url = `${URL_GENRES}&language=en-US&api_key=${API_KEY}`;

  const response = await axios(url);

  const data = response.data.genres;
  return data;
}

export async function fetchCast(Id) {
  const url = `${URL_CAST}${Id}/credits?api_key=${API_KEY}&language=en-US`;

  const response = await axios(url);

  const data = response.data.cast;
  return data;
}
