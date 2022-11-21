import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { FilmImgDiv, FimlContainer } from './MovieDetails.styled';
import PropTypes from 'prop-types';
import { BackLink } from 'components/BackLink/BackLink';

export const MovieDetails = ({ trendFilms, ganresAll }) => {
  const { Id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const filmId = trendFilms.find(film => Number(film.id) === Number(Id));
  // console.log(filmId);
  const {
    id,
    original_name,
    original_title,
    overview,
    genre_ids,
    poster_path,
    vote_average,
    first_air_date,
    release_date,
  } = filmId;
  const imgUrl = `https://www.themoviedb.org/t/p/w500${poster_path}`;

  // Ф-ція обчислення жанрів
  function genresList(array) {
    let array_genre_names = [];
    let genre_namess = '';

    if (!ganresAll) {
      return;
    }
    for (const id of array) {
      const arrayIdGenres = ganresAll.find(
        genre => Number(genre.id) === Number(id)
      );

      array_genre_names.push(arrayIdGenres.name || 'n/a');

      genre_namess = array_genre_names.join(', ');
    }
    return genre_namess;
  }
  // Ф-ція обрізання дати
  function years() {
    if (release_date) {
      const year = release_date.slice(0, 4);
      return year;
    }
    if (first_air_date) {
      const year = first_air_date.slice(0, 4);
      return year;
    }
  }

  return (
    <>
      <FimlContainer>
        <FilmImgDiv>
          <img src={imgUrl} alt="" title="" width="336" id={id} />
        </FilmImgDiv>

        <div>
          <BackLink to={backLinkHref}>Back to Home</BackLink>
          <h2>
            {original_name || original_title} ({years()})
          </h2>
          <h4>Rating: {vote_average}</h4>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{`${genresList(genre_ids) || 'N/A'}`}</p>
        </div>
      </FimlContainer>
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  trendFilms: PropTypes.array,
  ganresAll: PropTypes.array,
};
