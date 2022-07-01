/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { ItemCarouselAdjust } from './MainCarouselStyles';
import { motion } from 'framer-motion';
import MediaQuery from '@components/MediaQuery/MediaQuery';
import { useEffect } from 'react';
import { IMovie } from 'src/models/MovieModels';
import { GetMethod } from 'src/services/request';
import Link from 'next/link';
import MainCarouselSkeleton from '@components/Skeletons/MainCarouselSkeleton';

const MainCarousel = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [load, setLoad] = useState<boolean>(true);

  const peticion = async () => {
    setLoad(true);
    const result = await GetMethod(`/moviesRating`);
    if (result.ok) {
      setMovies(result.response);
      setLoad(false);
      return;
    }
    setLoad(false);
  };

  useEffect(() => {
    peticion();
  }, []);

  if (load) {
    return <MainCarouselSkeleton />;
  }

  return (
    <>
      <motion.div
        style={{ height: '500px' }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1.2 }}
        transition={{ duration: 1.5 }}
      >
        <section
          style={{
            width: '100%',
            height: '500px',
            position: 'absolute',
            left: '0px',
          }}
        >
          <Carousel>
            {movies.map((movie, i) => {
              return (
                <Carousel.Item key={i}>
                  <ItemCarouselAdjust>
                    <img className="carousel-image" src={movie.banner} alt="ITEM" />
                    <Carousel.Caption>
                      <Container fluid={true}>
                        <Row>
                          <Col xs={12} sm={4} style={{ textAlign: 'center' }}>
                            <img className="carousel-image-poster" src={movie.poster} />
                          </Col>
                          <Col xs={12} sm={8} className="col-caption">
                            <h2>{movie.movieName}</h2>
                            <h4>
                              <Badge bg="warning">TOP: {i + 1}</Badge> <span>Genero: {movie.genero}</span>
                            </h4>
                            <MediaQuery query="(min-width:800px)">
                              <p>{movie.sinopsis}</p>
                            </MediaQuery>
                            <Link href={`/movies/${movie._id}`}>
                              <Button variant="primary">Rentar pelicula</Button>
                            </Link>
                          </Col>
                        </Row>
                      </Container>
                    </Carousel.Caption>
                  </ItemCarouselAdjust>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </section>
      </motion.div>
    </>
  );
};

export default MainCarousel;
