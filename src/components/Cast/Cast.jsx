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

  function setProfile(profile_path) {
    if (profile_path === null || profile_path === undefined) {
      return 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg';
    }

    return `https://www.themoviedb.org/t/p/w500${profile_path}`;
  }

  return (
    <MainActor>
      <ActorCards>
        {cast
          ? cast.map(({ name, character, profile_path, id, original_name }) => {
              return (
                <li key={id}>
                  <img src={setProfile(profile_path)} alt="actor" width="100" />
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
