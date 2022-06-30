import CardMovie from '@components/CardMovie/CardMovie';
import React from 'react';
import { useRef } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { IMovie } from 'src/models/MovieModels';
import { SectionMultiCarousel, ItemMultiCarouselEnvolve, MultiCarousel } from './CarouselMoviesStyles';

interface IPropsCarouselMovies {
  movies: IMovie[];
  title: string;
}
const CarouselMovies = (props: IPropsCarouselMovies) => {
  const { movies, title } = props;

  const refSlide = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const clickNext = () => {
    const refSlideCurrent = refSlide.current as any;
    refSlideCurrent.slickNext();
  };

  const clickPrev = () => {
    const refSlideCurrent = refSlide.current as any;
    refSlideCurrent.slickPrev();
  };

  return (
    <MultiCarousel>
      <Container fluid="lg">
        <Row>
          <Col>
            <h1>{title}</h1>
          </Col>
          <Col className="multi-carousel-controls">
            <SectionMultiCarousel>
              <Button onClick={clickPrev} style={{ marginRight: '10px', fontSize: '1.2rem' }} variant="outline-primary">
                &#8676;
              </Button>
              <Button onClick={clickNext} style={{ fontSize: '1.2rem' }} className="mr-10" variant="outline-primary">
                &#8677;
              </Button>
            </SectionMultiCarousel>
          </Col>
        </Row>
      </Container>
      <br />
      <Slider ref={refSlide} {...settings}>
        {movies.map((movie, i) => {
          return (
            <SectionMultiCarousel key={i}>
              <ItemMultiCarouselEnvolve>
                <CardMovie movie={movie} />
              </ItemMultiCarouselEnvolve>
            </SectionMultiCarousel>
          );
        })}
      </Slider>
    </MultiCarousel>
  );
};
export default CarouselMovies;
