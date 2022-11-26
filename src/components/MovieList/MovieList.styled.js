import styled from '@emotion/styled';

export const FilmName = styled.p`
  margin: 0;
  padding: 2px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const FilmCards = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 10px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const FilmItem = styled.li`
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.03);
  }
`;
