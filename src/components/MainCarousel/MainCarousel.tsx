/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Carousel, Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { ItemCarouselAdjust } from './MainCarouselStyles';
import { motion } from 'framer-motion';
import MediaQuery from '@components/MediaQuery/MediaQuery';

const MainCarousel = () => (
  <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1.2 }} transition={{ duration: 1.5 }}>
    <Carousel>
      <Carousel.Item>
        <ItemCarouselAdjust>
          <img
            className="carousel-image"
            src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg"
            alt="ITEM"
          />
          <Carousel.Caption>
            <Container fluid={true}>
              <Row>
                <Col xs={12} sm={4} style={{ textAlign: 'center' }}>
                  <img
                    className="carousel-image-poster"
                    src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/neMZH82Stu91d3iqvLdNQfqPPyl.jpg"
                  />
                </Col>
                <Col xs={12} sm={8} className="col-caption">
                  <h2>Nombre de la pelicula</h2>
                  <h4>
                    <Badge bg="warning">TOP: 2</Badge> <span>Genero: accion</span>
                  </h4>
                  <MediaQuery query="(min-width:800px)">
                    <p>
                      Una novelista romántica solitaria estaba segura de que nada podría ser peor que quedarse atrapada
                      en una gira de libros con su modelo de portada hasta que un intento de secuestro los lleva a ambos
                      a una aventura salvaje en la jungla, demostrando que la vida puede ser mucho más extraña y más
                      romántica que cualquiera de sus ficciones de bolsillo.
                    </p>
                  </MediaQuery>
                  <Button variant="primary">Rentar pelicula</Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </ItemCarouselAdjust>
      </Carousel.Item>

      <Carousel.Item>
        <ItemCarouselAdjust>
          <img
            className="carousel-image"
            src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg"
            alt="ITEM"
          />
          <Carousel.Caption>
            <Container fluid={true}>
              <Row>
                <Col xs={12} sm={4} style={{ textAlign: 'center' }}>
                  <img
                    className="carousel-image-poster"
                    src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/neMZH82Stu91d3iqvLdNQfqPPyl.jpg"
                  />
                </Col>
                <Col xs={12} sm={8} className="col-caption">
                  <h2>Nombre de la pelicula</h2>
                  <h4>
                    <Badge bg="warning">TOP: 2</Badge> <span>Genero: accion</span>
                  </h4>
                  <MediaQuery query="(min-width:800px)">
                    <p>
                      Una novelista romántica solitaria estaba segura de que nada podría ser peor que quedarse atrapada
                      en una gira de libros con su modelo de portada hasta que un intento de secuestro los lleva a ambos
                      a una aventura salvaje en la jungla, demostrando que la vida puede ser mucho más extraña y más
                      romántica que cualquiera de sus ficciones de bolsillo.
                    </p>
                  </MediaQuery>
                  <Button variant="primary">Rentar pelicula</Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </ItemCarouselAdjust>
      </Carousel.Item>
    </Carousel>
  </motion.div>
);

export default MainCarousel;
