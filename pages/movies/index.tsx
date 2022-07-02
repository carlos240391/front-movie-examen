import Results from '@components/Results/Results';
import Search from '@components/Search/Search';
import CarouselMoviesSkeleton from '@components/Skeletons/CarouselMoviesSkeleton';
import { motion } from 'framer-motion';
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
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Head>
          <title>Movie App | BUSQUEDA</title>
        </Head>
        <Search />
        {load ? <CarouselMoviesSkeleton /> : <Results query={query} movies={movies} />}
      </motion.div>
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
