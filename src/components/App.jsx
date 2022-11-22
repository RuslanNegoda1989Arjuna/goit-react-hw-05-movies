import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchTrending, { fetchGenres } from 'tools/Api';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  const [trendFilms, setTrendFilms] = useState();
  const [ganresAll, setGanresAll] = useState();

  //  Фетч по трендовим фільмам
  useEffect(() => {
    try {
      const films = fetchTrending();

      films.then(data => {
        return setTrendFilms(data);
      });
    } catch (error) {}
  }, []);
  // фетч по жанрам
  useEffect(() => {
    try {
      const ganres = fetchGenres();

      ganres.then(data => {
        return setGanresAll(data);
      });
    } catch (error) {}
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home trendFilms={trendFilms} />} />
          <Route path="/movies/" element={<Movies />} />
          <Route
            path="/movies/:Id"
            element={
              <MovieDetails trendFilms={trendFilms} ganresAll={ganresAll} />
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
