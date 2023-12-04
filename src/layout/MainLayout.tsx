import React from 'react';
import NavBar from '@/components/NavBar';
import { Container } from '@mui/material';
import Player from '@/components/Player';
import { useTypedSelector } from '@/hooks/useTypedSelector';

type BoxProps = {
  children: React.ReactNode;
  title?: string;
};

const MainLayout: React.FC<BoxProps> = ({ children, title }) => {
  const { active } = useTypedSelector((state) => state.player);
  return (
    <>
      {/* <title>{title || 'Music Platform'}</title> */}
      <NavBar />
      <Container style={{ margin: '90px 0' }}>{children}</Container>
      {active && <Player />}
    </>
  );
};

export default MainLayout;
