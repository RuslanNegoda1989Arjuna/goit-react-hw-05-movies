import { HomeList } from 'components/HomeList';
import { useEffect } from 'react';
import { useState } from 'react';
import fetchTrending from 'tools/Api';

export const Home = () => {
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
    <main>
      <h1>Trending Today</h1>
      <HomeList trendFilms={trendFilms} />
    </main>
  );
};
