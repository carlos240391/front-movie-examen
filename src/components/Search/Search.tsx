import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap';

const Search = () => {
  const router = useRouter();

  const [searchparam, setSearchparam] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const getSearchParam = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowError(false);
    setSearchparam(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!searchparam) {
      setShowError(true);
      return;
    }
    setSearchparam('');
    router.push({ pathname: '/movies', query: { search: searchparam } });
  };
  return (
    <>
      <Row style={{ margin: '50px 0px 50px 0px' }}>
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
              onChange={getSearchParam}
              value={searchparam}
            />
            {showError && (
              <Alert variant="info" style={{ marginTop: '20px' }}>
                Asegurate de escribir algo en el formulario.
              </Alert>
            )}
            <Button type="submit" variant="primary" style={{ marginTop: '20px' }}>
              Buscar
            </Button>
          </Form>
        </Col>
        <Col xs={12} sm={2}></Col>
      </Row>
    </>
  );
};

export default Search;
