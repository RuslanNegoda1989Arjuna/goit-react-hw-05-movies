import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchTrending from 'tools/Api';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';

export const App = () => {
  const [trendFilms, setTrendFilms] = useState();

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
          <Route
            path="/movies/:Id"
            element={<MovieDetails trendFilms={trendFilms} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

// <HeaderBox>
//   <nav>
//     <HomeLink to="/" end>
//       Home
//     </HomeLink>
//   </nav>
// </HeaderBox>;
