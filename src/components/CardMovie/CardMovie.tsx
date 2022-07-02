import Link from 'next/link';
import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { IMovie } from 'src/models/MovieModels';

interface IPropsCardMovie {
  movie: IMovie;
}

const CardMovie = (props: IPropsCardMovie) => {
  const {
    movie: { movieName, poster, genero, duracion, _id },
  } = props;

  return (
    <Card border="light">
      <Card.Img style={{ borderRadius: '3px' }} variant="bottom" src={poster} />
      <Card.Header>
        <Card.Text style={{ textAlign: 'center' }}>
          <Badge bg="info">{genero}</Badge>
        </Card.Text>
      </Card.Header>
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title style={{ textAlign: 'center' }}>{movieName}</Card.Title>
        <Link href={`/movies/${_id}`}>
          <Button variant="link">Rentar Pelicula</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardMovie;
