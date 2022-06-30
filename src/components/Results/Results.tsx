import CardMovie from '@components/CardMovie/CardMovie';
import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { IMovie } from 'src/models/MovieModels';

interface IPropsResults {
  movies: IMovie[];
  query: string;
}

const Results = (props: IPropsResults) => {
  const { movies, query } = props;

  return (
    <>
      <Row style={{ margin: '20px 0px' }}>
        <Col xs={12} md={6}>
          <h1> Resultados de: {query}</h1>
        </Col>
        {/* <Col xs={12} md={6}>
          <Badge pill bg="success" style={{ fontSize: '1rem', margin: '0px 5px' }}>
            Drama
          </Badge>
          <Badge pill bg="success" style={{ fontSize: '1rem', margin: '0px 5px' }}>
            Acción
          </Badge>
        </Col> */}
      </Row>
      <Row>
        {movies.length ? (
          movies.map((movie, key) => {
            return (
              <Col xs={6} md={4} lg={2} style={{ margin: '10px 0px' }} key={key}>
                <CardMovie movie={movie} />
              </Col>
            );
          })
        ) : (
          <Col>No se encontraron resultados</Col>
        )}
      </Row>
    </>
  );
};

export default Results;
