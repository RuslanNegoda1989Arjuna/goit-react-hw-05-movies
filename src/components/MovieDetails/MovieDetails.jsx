import { useParams } from 'react-router-dom';

export const MovieDetails = ({ trendFilms }) => {
  const { Id } = useParams();

  const filmId = trendFilms.find(film => Number(film.id) === Number(Id));
  const {
    id,
    original_name,
    original_title,
    overview,
    genre_ids,
    popularity,
    poster_path,
  } = filmId;
  const imgUrl = `https://www.themoviedb.org/t/p/w500${poster_path}`;

  return (
    <div>
      <h2>{original_name || original_title}</h2>
      <p>{overview}</p>

      <img
        class="image modal-movie__img"
        src={imgUrl}
        alt=""
        title=""
        width="336"
        id={id}
      />
      <p>{popularity}%</p>
      <p>{genre_ids}</p>
    </div>
  );
};
