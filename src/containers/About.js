import React from 'react';
import '../assets/css/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import Img from '../assets/images/maxi-trabajando.png';

export default function About() {
  return (
    <div className='about-page'>
      <Container>
        <Row  className='about-row'>
          <Col md={6} className='about-right'>
              <h1 className='about-title centrado'>SUMAR Mantenimientos</h1><hr/>
              <h6 className='about-txt-principal centrado'>
                Brindamos soluciones de calidad y a medida especializadas a cada caso en
                particular. <br/>
                Damos un servicio personalizado, con asesoramiento de nuestros
                mejores profesionales en distintas áreas:
              </h6>
                <Container>
                  <Row className='about-box'>
                    <Col xs={12} className='about-txt2'>
                      <p> → Construcción, infraestructura y mantenimiento </p>
                    </Col>
                    <Col xs={12} className='about-txt2'>
                      <p> → Servicio completo de aires acondicionados </p>
                    </Col>
                    <Col xs={12} className='about-txt2'>
                      <p> → Asesoramientos administrativos varios </p>
                    </Col>
                  </Row>
                </Container>
              <h6 className='about-txt centrado'>
                A diario nacen nuevas dificultados e inconvenientes 
                pero la experiencia y la capacidad de resolverlos nos permiten avanzar 
                un paso mas. 
              </h6>
          </Col>
          <Col md={6} className='about-left'>
            <img src={Img} className='about-img'></img>
          </Col>
        </Row>
      </Container>
    </div>
            )
}
