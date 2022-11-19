import { HomeList } from 'components/HomeList';
import { useEffect } from 'react';
import { useState } from 'react';
import fetchTrending from 'tools/Api';

export const Home = () => {
  const [trendFilms, setTrendFilms] = useState();

  useEffect(() => {
    try {
      const films = fetchTrending();
      // if (!films) {
      //   return;
      // }

      films.then(data => {
        return setTrendFilms(data);
      });
    } catch (error) {}
  }, []);

  console.log('state', trendFilms);

  return (
    <main>
      <HomeList trendFilms={trendFilms} />
    </main>
  );
};
