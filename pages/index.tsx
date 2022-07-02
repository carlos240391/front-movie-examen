import FantasyMovies from '@components/FantasyMovies/FantasyMovies';
import MainCarousel from '@components/MainCarousel/MainCarousel';
import Search from '@components/Search/Search';
import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Head>
          <title>Movie App | HOME</title>
        </Head>
        <MainCarousel />
        <Search />
        <FantasyMovies />
      </motion.div>
    </>
  );
};

export default Home;
