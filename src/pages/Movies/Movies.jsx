import { HomeList } from 'components/MovieList/MovieList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchSearchFilm } from 'tools/Api';

export const Movies = () => {
  const [searchFilm, setSearchFilm] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const quary = searchParams.get('quary');

  useEffect(() => {
    if (!quary) return;
    try {
      const searchFilms = fetchSearchFilm(quary);

      searchFilms.then(data => {
        if (data.length === 0) {
          toast.error(`Nothing is found with this film name: ${quary}!`, {
            position: toast.POSITION.TOP_LEFT,
          });
        }

        return setSearchFilm(data);
      });
    } catch (message) {
      console.warn('message ERROR movie', message);
      toast.error(message);
    }
  }, [quary]);

  const onSubmit = values => {
    if (values.value.trim() === '') {
      return toast.warn('Enter a word for search');
    } else if (values.value === quary) {
      return;
    }

    setSearchParams({ quary: values.value });
  };

  return (
    <div>
      <SearchBox onSubmit={onSubmit} />
      {searchFilm && <HomeList trendFilms={searchFilm} />}
    </div>
  );
};
