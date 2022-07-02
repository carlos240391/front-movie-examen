import CarouselMovies from '@components/CarouselMovies/CarouselMovies';
import CarouselMoviesSkeleton from '@components/Skeletons/CarouselMoviesSkeleton';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { IMovie } from 'src/models/MovieModels';
import { GetMethod } from 'src/services/request';

const FantasyMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [load, setload] = useState<boolean>(false);

  const peticion = async () => {
    setload(true);
    const result = await GetMethod(`/movies/category?category=fantasia`);
    if (result.ok) {
      setMovies(result.response);
      setload(false);
      return;
    }
    setload(false);
  };

  useEffect(() => {
    peticion();
  }, []);

  if (load) {
    return <CarouselMoviesSkeleton />;
  }
  return (
    <>
      <CarouselMovies title="Películas de fantasia" movies={movies} />
    </>
  );
};

export default FantasyMovies;
