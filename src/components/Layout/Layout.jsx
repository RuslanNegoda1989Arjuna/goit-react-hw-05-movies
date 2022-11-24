import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { AppBarDiv, BoxLayout } from './Layout.styled';

export const Layout = () => {
  return (
    <BoxLayout>
      <AppBarDiv>
        <AppBar />
      </AppBarDiv>
      <Outlet />
    </BoxLayout>
  );
};
