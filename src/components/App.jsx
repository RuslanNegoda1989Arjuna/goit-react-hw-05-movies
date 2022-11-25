import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchTrending from 'tools/Api';

import { Layout } from './Layout/Layout';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';

const Home = lazy(() =>
  import('./Home/Home').then(module => ({ ...module, default: module.Home }))
);
const Movies = lazy(() =>
  import('./Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);
const MovieDetails = lazy(() =>
  import('./MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({ ...module, default: module.Cast }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  const [trendFilms, setTrendFilms] = useState();
  const [errors, setErrors] = useState(null);

  //  Фетч по трендовим фільмам
  useEffect(() => {
    try {
      const films = fetchTrending();

      films.then(data => {
        return setTrendFilms(data);
      });
    } catch (error) {
      setErrors({ error });
      toast.error({ error });
    }
  }, []);

  return (
    <div>
      {errors && <p>Whoops, something went wrong: {errors}</p>}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home trendFilms={trendFilms} />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:Id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home trendFilms={trendFilms} />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} position="top-left" theme="colored" />
    </div>
  );
};
