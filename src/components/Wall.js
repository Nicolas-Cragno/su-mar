import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/Wall.css';

export default function Wall() {
  return (
    <div className='wall'>
        <Container className='wall'>
            <Row >
                <Col>
                    <h1 className='wall-box-txt'>+3</h1>
                    <h6 className='wall-box-txt'>años de experiencia</h6>
                </Col>
                <Col>
                    <h1 className='wall-box-txt'>150+</h1>
                    <h6 className='wall-box-txt'>proyectos realizados</h6>
                </Col>
                <Col>
                    <h3 className='wall-box-txt'>SUMAR MANTENIMIENTOS</h3>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
