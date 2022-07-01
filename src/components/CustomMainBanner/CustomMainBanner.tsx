import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IMovie } from 'src/models/MovieModels';
import { MainCustomBannerCaption, MainCustomBannerContainer } from './CustomMainBannerStyles';

interface IPropsCustomMainBanner {
  movie: IMovie;
}

const CustomMainBanner = (props: IPropsCustomMainBanner) => {
  const {
    movie: { banner },
  } = props;
  return (
    <>
      <MainCustomBannerContainer>
        <MainCustomBannerCaption banner={banner}>
          <Container fluid="lg">
            <Row>
              <Col xs={3}>1</Col>
              <Col xs={3}>1</Col>
              <Col xs={3}>1</Col>
              <Col xs={3}>1</Col>
            </Row>
          </Container>
        </MainCustomBannerCaption>
      </MainCustomBannerContainer>
    </>
  );
};

export default CustomMainBanner;
