import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'tools/Api';
import { ActorCards, MainActor } from './Cast.styled';

export const Cast = () => {
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
    <MainActor>
      <ActorCards>
        {cast
          ? cast.map(({ name, character, profile_path, id, original_name }) => {
              const imgUrl = `https://www.themoviedb.org/t/p/w500${profile_path}`;
              return (
                <li key={id}>
                  <img src={imgUrl} alt="actor" width="100" />
                  <p>{name || original_name}</p>
                  <p>Character: {character}</p>
                </li>
              );
            })
          : 'N/A'}
      </ActorCards>
    </MainActor>
  );
};
