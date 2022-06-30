import Results from '@components/Results/Results';
import Search from '@components/Search/Search';
import CarouselMoviesSkeleton from '@components/Skeletons/CarouselMoviesSkeleton';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { IMovie } from 'src/models/MovieModels';
import { GetMethod } from 'src/services/request';

const Movies: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = props;
  const [movies, setmovies] = useState<IMovie[]>([]);
  const [load, setload] = useState<boolean>(true);

  const peticion = async () => {
    setload(true);
    const result = await GetMethod(`/movies/filter?parametro=${query}`);
    if (result.ok) {
      setmovies(result.response);
      setload(false);
      return;
    }
    setload(false);
  };

  useEffect(() => {
    peticion();
  }, [query]);

  return (
    <>
      <Head>
        <title>Movie App | BUSQUEDA</title>
      </Head>
      <Search />
      {load ? <CarouselMoviesSkeleton /> : <Results query={query} movies={movies} />}
    </>
  );
};

export default Movies;

type Query = string;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query: Query = context.query.search as string;

  return {
    props: {
      query: query,
    },
  };
};
