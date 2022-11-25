import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  FilmImgDiv,
  FimlContainer,
  InformationDiv,
} from './MovieDetails.styled';
import PropTypes from 'prop-types';
import { BackLink } from 'components/BackLink/BackLink';
import { Suspense, useEffect, useState } from 'react';
import { ApiMovieInfo } from 'tools/Api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MovieDetails = () => {
  const [detailFilms, setDetailFilms] = useState();
  const [errors, setErrors] = useState(null);
  const { Id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  // Пошук фільма за айдішніком
  useEffect(() => {
    try {
      const details = ApiMovieInfo(Id);

      details.then(data => {
        if (data.length === 0) {
          toast.error('Nothing is found !', {
            position: toast.POSITION.TOP_LEFT,
          });
        }
        return setDetailFilms(data);
      });
    } catch (error) {
      setErrors({ error });
      toast.error({ error });
    }
  }, [Id]);

  if (!detailFilms) {
    return null;
  }

  const {
    id,
    original_name,
    original_title,
    overview,
    genres,
    poster_path,
    vote_average,
    first_air_date,
    release_date,
  } = detailFilms;

  function setPosters(poster_path) {
    if (poster_path === null || poster_path === undefined) {
      return 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg';
    }

    return `https://www.themoviedb.org/t/p/w500${poster_path}`;
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
      <main>
        {errors && <p>Whoops, something went wrong: {errors}</p>}
        <BackLink to={backLinkHref}>Go Back</BackLink>
        <FimlContainer>
          <FilmImgDiv>
            <img
              src={setPosters(poster_path)}
              alt=""
              title=""
              width="336"
              id={id}
            />
          </FilmImgDiv>

          <div>
            <h2>
              {original_name || original_title} ({years()})
            </h2>
            <h4>Rating: {vote_average}</h4>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>
              {genres ? genres.map(e => e.name).join(', ') : 'not information'}
            </p>
          </div>
        </FimlContainer>
        <InformationDiv>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to="cast" state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </li>
          </ul>
        </InformationDiv>
        <ToastContainer autoClose={2500} position="top-left" theme="colored" />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

MovieDetails.propTypes = {
  trendFilms: PropTypes.array,
  ganresAll: PropTypes.array,
};
