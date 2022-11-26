import { Link, useLocation } from 'react-router-dom';
import { FilmCards, FilmItem, FilmName } from './MovieList.styled';

export const HomeList = ({ trendFilms }) => {
  const location = useLocation();
  if (!trendFilms) {
    return;
  }
  return (
    <div>
      <FilmCards>
        {trendFilms.map(
          ({ original_name, original_title, id, poster_path }) => {
            return (
              <FilmItem key={id} id={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={
                      poster_path
                        ? `https://www.themoviedb.org/t/p/w500${poster_path}`
                        : 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg'
                    }
                    alt="Poster film"
                    title={original_name || original_title}
                    width="230"
                  />
                  <FilmName>{original_name || original_title}</FilmName>
                </Link>
              </FilmItem>
            );
          }
        )}
      </FilmCards>
    </div>
  );
};
