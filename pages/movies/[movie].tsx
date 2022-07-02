import BodyDescription from '@components/BodyDescription/BodyDescription';
import CustomMainBanner from '@components/CustomMainBanner/CustomMainBanner';
import RentComponent from '@components/RentComponent/ReantComponent';
import MainCarouselSkeleton from '@components/Skeletons/MainCarouselSkeleton';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IMovie } from 'src/models/MovieModels';
import { GetMethod } from 'src/services/request';

// Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(monto);

const EachMovie = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { id } = props;

  const [movie, setMovie] = useState<IMovie | null>(null);
  const [load, setLoad] = useState<boolean>(true);

  const peticion = async () => {
    setLoad(true);
    const result = await GetMethod(`/movies/${id}`);
    if (result.ok) {
      setMovie(result.response[0]);
      setLoad(false);
      return;
    }
    setLoad(false);
  };

  const refreshpeticion = async () => {
    const result = await GetMethod(`/movies/${id}`);
    if (result.ok) {
      setMovie(result.response[0]);
      return;
    }
  };

  useEffect(() => {
    peticion();
  }, []);

  if (load) {
    return <MainCarouselSkeleton />;
  }

  return (
    <>
      <CustomMainBanner movie={movie as IMovie} />
      <Row style={{ marginTop: '50px' }}>
        <Col xs={12} sm={6} lg={8}>
          <BodyDescription movie={movie as IMovie} />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <RentComponent idMovie={id} demand={movie?.demand as number} refreshPeticion={refreshpeticion} />
        </Col>
      </Row>
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
