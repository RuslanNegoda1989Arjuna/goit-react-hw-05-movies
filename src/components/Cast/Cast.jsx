import { useParams } from 'react-router-dom';

export const Cast = ({ trendFilms }) => {
  const { Id } = useParams();
  const filmId = trendFilms.find(film => Number(film.id) === Number(Id));
  console.log(filmId.id);
  return (
    <main>
      <h1> Tom Kruz</h1>
      <p>{filmId.id}</p>
    </main>
  );
};
