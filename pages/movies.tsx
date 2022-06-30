import Results from '@components/Results/Results';
import Search from '@components/Search/Search';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React from 'react';
import { useEffect } from 'react';

const Movies: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = props;

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <>
      <Search />
      <Results query={query} movies={[1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1]} />
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
