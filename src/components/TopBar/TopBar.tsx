/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import MediaQuery from '@components/MediaQuery/MediaQuery';
import Link from 'next/link';

const TopBar = () => {
  return (
    <motion.div
      style={{ position: 'sticky', top: '0px', zIndex: '999' }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container fluid="lg">
          <Link href="/">
            <Navbar.Brand style={{ cursor: 'pointer' }}>
              <img src="/static/logo.png" width="250" height="50" className="d-inline-block align-top" alt="" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <MediaQuery query="(max-width:800px)">
              <Nav>
                <NavDropdown id="nav-dropdown-dark-example" title="Menu" menuVariant="dark" drop="start">
                  <Link href={`/movies?search=fantasia`}>
                    <NavDropdown.Item as={'span'}>Fantasia</NavDropdown.Item>
                  </Link>
                  <Link href={`/movies?search=accion`}>
                    <NavDropdown.Item as={'span'}>Acción</NavDropdown.Item>
                  </Link>
                  <Link href={`/movies?search=drama`}>
                    <NavDropdown.Item as={'span'}>Drama</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Nav>
            </MediaQuery>
            <MediaQuery query="(min-width:800px)">
              <Nav>
                <Link href={`/movies?search=fantasia`}>
                  <Nav.Link as={'span'} style={{ cursor: 'pointer' }}>
                    Fantasia
                  </Nav.Link>
                </Link>
                <Link href={`/movies?search=accion`}>
                  <Nav.Link as={'span'} style={{ cursor: 'pointer' }}>
                    Accion
                  </Nav.Link>
                </Link>
                <Link href={`/movies?search=drama`}>
                  <Nav.Link as={'span'} style={{ cursor: 'pointer' }}>
                    Drama
                  </Nav.Link>
                </Link>
              </Nav>
            </MediaQuery>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default TopBar;
