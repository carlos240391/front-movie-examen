import FantasyMovies from '@components/FantasyMovies/FantasyMovies';
import MainCarousel from '@components/MainCarousel/MainCarousel';
import Search from '@components/Search/Search';
import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <>
      <Head>
        <title>Movie App | HOME</title>
      </Head>
      <MainCarousel />
      <Search />
      <FantasyMovies />
    </>
  );
};

export default Home;
