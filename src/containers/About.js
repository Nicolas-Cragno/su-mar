import React from 'react';
import '../assets/css/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import Img from '../assets/images/maxi-trabajando.png';

export default function About() {
  return (
    <div className='about-page'>
      <Container>
        <Row>
          <Col md={6} className='about-right'>
              <h1 className='about-title centrado'>SUMAR Mantenimientos</h1><hr/>
              <h6 className='about-txt-principal centrado'>
                Mi nombre es Leonardo, más conocido como Leo. <br/>
                Soy una persona común la cual la vida le hizo ser grande 
                y responsable de muy chico, termine mis estudios y sigo 
                perfeccionándome para dar lo mejor de mi junto a mi equipo de trabajo.
              </h6>
                <Container>
                  <Row className='about-box'>
                    <Col xs={12} className='about-txt2'>
                      <p> → Maestro mayor de obras </p>
                    </Col>
                    <Col xs={12} className='about-txt2'>
                      <p> → Técnico en colocación de aires acondicionados </p>
                    </Col>
                    <Col xs={12} className='about-txt2'>
                      <p> → Corredor inmobiliario </p>
                    </Col>
                    <Col xs={12} className='about-txt2'>
                      <p> → Técnico de acceso y rescate vertical (nv. intermedio) </p>
                    </Col>
                  </Row>
                </Container>
              <h2 className='about-subtitle centrado'>Trabajo, experiencia y valores</h2>
              <h6 className='about-txt centrado'>
                Junto con mi equipo tenemos pasión por lo que hacemos, el trato 
                constante con diferentes tipos de personalidades nos permite llevar una relación 
                duradera en este rubro. <br/>
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
