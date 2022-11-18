import { HomeList } from 'components/HomeList';
import fetchTrending from 'tools/Api';

export const Home = () => {
  const trendFilms = fetchTrending().then(data => {
    return data;
  });
  console.log('trendFilms', trendFilms);
  return (
    <main>
      <HomeList trendFilms={trendFilms} />
    </main>
  );
};
