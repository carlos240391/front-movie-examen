import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

const Foter = () => {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <section
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <h5 style={{ color: 'white', padding: '10px' }}>Movie App©{year}</h5>
          </section>
        </Container>
      </Navbar>
    </>
  );
};

export default Foter;
