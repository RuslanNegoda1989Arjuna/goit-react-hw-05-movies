import { useParams } from 'react-router-dom';
import { FilmImgDiv, FimlContainer } from './MovieDetails.styled';

export const MovieDetails = ({ trendFilms }) => {
  const { Id } = useParams();

  const filmId = trendFilms.find(film => Number(film.id) === Number(Id));
  console.log(filmId);
  const {
    id,
    original_name,
    original_title,
    overview,
    genre_ids,
    popularity,
    poster_path,
    vote_average,
    first_air_date,
    release_date,
  } = filmId;
  const imgUrl = `https://www.themoviedb.org/t/p/w500${poster_path}`;

  return (
    <FimlContainer>
      <FilmImgDiv>
        <img src={imgUrl} alt="" title="" width="336" id={id} />
      </FilmImgDiv>
      <div>
        <h2>{original_name || original_title}</h2>
        <span>{first_air_date || release_date}</span>
        <h3>Overview</h3>
        <p>{overview}</p>
        <p>{vote_average}%</p>
        <h3>Ganres</h3>
        <p>{genre_ids}</p>
      </div>
    </FimlContainer>
  );
};
