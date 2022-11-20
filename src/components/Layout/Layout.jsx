import { AppBar } from 'components/AppBar/AppBar';
import { AppBarDiv, BoxLayout } from './Layout.styled';

export const Layout = () => {
  return (
    <BoxLayout>
      <AppBarDiv>
        <AppBar />
      </AppBarDiv>
      <div>Films</div>
    </BoxLayout>
  );
};
