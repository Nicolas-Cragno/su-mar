import React from 'react';
import '../assets/css/Header.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../compounds/NavBar';

export default function Header() {
  return (
    <div className='header'>
        <Container>
          <Row>
              <Col xs={12}>
                <NavBar></NavBar>
              </Col>
          </Row>
        </Container>
    </div>
  )
}
