import CustomMainBanner from '@components/CustomMainBanner/CustomMainBanner';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { IMovie } from 'src/models/MovieModels';
import { GetMethod } from 'src/services/request';

const EachMovie = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { id } = props;

  const [movie, setMovie] = useState<IMovie | null>(null);
  const [load, setLoad] = useState<boolean>(true);

  const peticion = async () => {
    setLoad(true);
    const result = await GetMethod(`/movies/${id}`);
    if (result.ok) {
      console.log(result.response[0]);
      setMovie(result.response[0]);
      setLoad(false);
      return;
    }
    setLoad(false);
  };

  useEffect(() => {
    peticion();
  }, []);

  if (load) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <CustomMainBanner movie={movie as IMovie} />
    </>
  );
};

export default EachMovie;

type Param = string;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const param: Param = context.params?.movie as string;

  return {
    props: {
      id: param,
    },
  };
};
