import { HomeList } from 'components/HomeList';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import fetchTrending from 'tools/Api';
import { TrendingTitle } from './Home.styled';

export const Home = ({ trendFilms }) => {
  // const [trendFilms, setTrendFilms] = useState();

  // useEffect(() => {
  //   try {
  //     const films = fetchTrending();

  //     films.then(data => {
  //       return setTrendFilms(data);
  //     });
  //   } catch (error) {}
  // }, []);

  return (
    <main>
      <TrendingTitle>Trending Today</TrendingTitle>
      <HomeList trendFilms={trendFilms} />
    </main>
  );
};
