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
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TopBar />
        <Container fluid="lg" style={{ flexGrow: '1' }}>
          {children}
        </Container>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
