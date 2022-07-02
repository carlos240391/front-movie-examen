import React from 'react';
import { Spinner } from 'react-bootstrap';

const CarouselMoviesSkeleton = () => {
  return (
    <>
      <section
        style={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Spinner animation="border" variant="primary" />
      </section>
    </>
  );
};

export default CarouselMoviesSkeleton;
