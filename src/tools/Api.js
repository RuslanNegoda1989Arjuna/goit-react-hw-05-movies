import axios from 'axios';
const API_KEY = '0deed939492f10fa02b7b267dbfb9d49';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
const URL_GENRES = 'https://api.themoviedb.org/3/genre/movie/list?';
const URL_CAST = 'https://api.themoviedb.org/3/movie/';

// Фетч трендових фільмів
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
// Фетч жанрів
export async function fetchGenres() {
  const url = `${URL_GENRES}&language=en-US&api_key=${API_KEY}`;

  const response = await axios(url);

  const data = response.data.genres;
  return data;
}
// Фетч Акторів
export async function fetchCast(Id) {
  const url = `${URL_CAST}${Id}/credits?api_key=${API_KEY}&language=en-US`;

  const response = await axios(url);

  const data = response.data.cast;
  return data;
}

// Фетч фільм-ревью
export async function fetchReviews(Id) {
  const url = `${URL_CAST}${Id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  const response = await axios(url);

  const data = response.data.results;
  return data;
}
