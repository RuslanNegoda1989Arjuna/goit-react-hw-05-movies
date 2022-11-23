import { HomeList } from 'components/HomeList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
        return setSearchFilm(data);
      });
    } catch (error) {
      console.warn(error);
    }
  }, [quary]);

  const onSubmit = values => {
    setSearchParams({ quary: values.value });
  };

  return (
    <div>
      <SearchBox onSubmit={onSubmit} />
      {searchFilm && <HomeList trendFilms={searchFilm} />}
    </div>
  );
};
