import CarouselMovies from '@components/CarouselMovies/CarouselMovies';
import React from 'react';

const FantasyMovies = () => {
  return (
    <>
      <CarouselMovies title="Películas de fantasia" movies={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    </>
  );
};

export default FantasyMovies;
