import MediaQuery from '@components/MediaQuery/MediaQuery';
import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { IMovie } from 'src/models/MovieModels';
import { MainCustomBannerCaption, MainCustomBannerContainer } from './CustomMainBannerStyles';

interface IPropsCustomMainBanner {
  movie: IMovie;
}

const CustomMainBanner = (props: IPropsCustomMainBanner) => {
  const {
    movie: { banner, poster, movieName, genero, duracion, sinopsis, idiomas, subtitulos, clasificacion },
  } = props;
  return (
    <>
      <MainCustomBannerContainer>
        <MainCustomBannerCaption banner={banner}>
          <Container fluid="lg">
            <Row>
              <Col xs={12} className="MainCustomBannerCaption__container">
                <Row className="MainCustomBannerCaption__container-box">
                  <Col xs={12} sm={4} style={{ textAlign: 'center' }}>
                    <img src={poster} className="MainCustomBannerCaption__container-box-img" />
                  </Col>

                  <Col xs={12} sm={8} className="MainCustomBannerCaption__container-box-caption">
                    <h2>{movieName}</h2>
                    <p>
                      <Badge style={{ fontSize: '1rem', marginRight: '10px' }} bg="info">
                        {genero.toUpperCase()}
                      </Badge>
                      <Badge style={{ fontSize: '1rem', margin: '0px 10px' }} bg="success">
                        {duracion}
                      </Badge>
                      <Badge style={{ fontSize: '1rem', margin: '0px 10px' }} bg="warning">
                        {clasificacion}
                      </Badge>
                    </p>
                    <p>
                      Idiomas:
                      {idiomas.map((idioma, i) => (
                        <span style={{ margin: '0px 5px' }} key={i}>
                          {idioma}
                        </span>
                      ))}
                    </p>
                    <p>
                      Subtitulos:
                      {subtitulos.map((subtitulo, i) => (
                        <span style={{ margin: '0px 5px' }} key={i}>
                          {subtitulo}{' '}
                        </span>
                      ))}
                    </p>
                    {/* <MediaQuery query="(min-width:577px)">
                      <p>{sinopsis}</p>
                    </MediaQuery> */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </MainCustomBannerCaption>
      </MainCustomBannerContainer>
    </>
  );
};

export default CustomMainBanner;
