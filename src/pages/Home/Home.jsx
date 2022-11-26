import { HomeList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import fetchTrending from 'tools/Api';
import { TrendingTitle } from './Home.styled';

export const Home = () => {
  const [trendFilms, setTrendFilms] = useState();

  //  Фетч по трендовим фільмам
  useEffect(() => {
    try {
      const films = fetchTrending();

      films.then(data => {
        return setTrendFilms(data);
      });
    } catch (error) {
      toast.error({ error });
    }
  }, []);

  return (
    <main>
      <TrendingTitle>Trending Today</TrendingTitle>
      <HomeList trendFilms={trendFilms} />
    </main>
  );
};
