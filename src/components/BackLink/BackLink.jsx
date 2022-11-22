import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 8px;
  margin-left: 20px;
  color: #33d1aa;
  text-decoration: none;
  font-weight: 500;
  border: 2px solid tomato;
  border-radius: 3px;

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
