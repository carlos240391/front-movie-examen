import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';

const CardMovie = () => {
  return (
    <Card>
      <Card.Img
        style={{ borderRadius: '3px' }}
        variant="bottom"
        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg"
      />
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>Card Title proof large title</Card.Title>

        <Button variant="link">Rentar Pelicula</Button>
      </Card.Body>
      <Card.Header>
        <Card.Text>
          <Badge bg="warning">Genero</Badge> 2hrs.
        </Card.Text>
      </Card.Header>
    </Card>
  );
};

export default CardMovie;
