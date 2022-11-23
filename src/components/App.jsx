import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchTrending from 'tools/Api';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  const [trendFilms, setTrendFilms] = useState();

  //  Фетч по трендовим фільмам
  useEffect(() => {
    try {
      const films = fetchTrending();

      films.then(data => {
        return setTrendFilms(data);
      });
    } catch (error) {}
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home trendFilms={trendFilms} />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:Id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
