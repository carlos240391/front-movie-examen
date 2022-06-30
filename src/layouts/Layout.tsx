import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '@components/Footer/Footer';
import TopBar from '@components/TopBar/TopBar';

interface IPropsLayout {
  children: JSX.Element;
}

const Layout = (props: IPropsLayout) => {
  const { children } = props;

  return (
    <>
      <TopBar />
      <Container fluid="lg">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
