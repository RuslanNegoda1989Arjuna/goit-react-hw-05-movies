import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBarDiv, BoxLayout } from './Layout.styled';

export const Layout = () => {
  return (
    <BoxLayout>
      <AppBarDiv>
        <AppBar />
      </AppBarDiv>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </BoxLayout>
  );
};
