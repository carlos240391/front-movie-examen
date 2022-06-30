import { motion } from 'framer-motion';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Search = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    alert('haciendo busqueda');
  };
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1.2 }}
      transition={{ duration: 1.7 }}
    >
      <Container style={{ margin: '50px 0px' }}>
        <Row>
          <Col className="text-center">
            <h1>¿Que película estas buscando?</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={2}></Col>
          <Col xs={12} sm={8} className="text-center">
            <Form onSubmit={onSubmit}>
              <Form.Label>Inicia una busqueda por nombre o género y presiona enter. </Form.Label>
              <Form.Control
                type="text"
                placeholder="Buscar películas por nombre o género"
                size="lg"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <Button type="submit" variant="primary" style={{ marginTop: '20px' }}>
                Buscar
              </Button>
            </Form>
          </Col>
          <Col xs={12} sm={2}></Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Search;
