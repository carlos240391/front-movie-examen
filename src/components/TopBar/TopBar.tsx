/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import MediaQuery from '@components/MediaQuery/MediaQuery';

const TopBar = () => {
  return (
    <motion.div
      style={{ position: 'sticky', top: '0px', zIndex: '9999' }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container fluid="lg">
          <Navbar.Brand href="#home">
            <img src="/static/logo.png" width="250" height="50" className="d-inline-block align-top" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <MediaQuery query="(max-width:800px)">
              <Nav>
                <NavDropdown id="nav-dropdown-dark-example" title="Menu" menuVariant="dark" drop="start">
                  <NavDropdown.Item href="#action/3.1">Accion</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Fantasia</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </MediaQuery>
            <MediaQuery query="(min-width:800px)">
              <Nav>
                <Nav.Link href="#home">Fantasia</Nav.Link>
                <Nav.Link href="#tures">Accion</Nav.Link>
                <Nav.Link href="#pricing">Drama</Nav.Link>
              </Nav>
            </MediaQuery>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default TopBar;
