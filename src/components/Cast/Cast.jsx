import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'tools/Api';

export const Cast = ({ trendFilms }) => {
  const { Id } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    try {
      const cast = fetchCast(Id);

      cast.then(data => {
        return setCast(data);
      });
    } catch (error) {
      console.warn(error);
    }
  }, [Id]);

  console.log('CAST ARRAY:', cast);

  return (
    <main>
      <h1> Tom Kruz</h1>
      <p>{Id}</p>
    </main>
  );
};
