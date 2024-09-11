import React from 'react';
import '../assets/css/Info.css';
import { Container, Row, Col } from 'react-bootstrap';
import CardExample from '../compounds/CardExample';
import ImgCableado from '../assets/images/cableado.png';
import ImgPintura from '../assets/images/pintura.png';
import ImgAlbanileria from '../assets/images/albanileria.png';
import ImgPlomeria from '../assets/images/plomeria.png';
import ImgHogar from '../assets/images/hogar.png';


export default function Info() {
  return (
    <div className='info-page'>
      <Container>
        <Row>
          <Col xs={12}>
            <CardExample
            img={ImgCableado}
            txt={'Cableado de casa e instalaciones eléctricas'}
            ></CardExample>
          </Col>
          <Col md={6}>
            <CardExample
            img={ImgPintura}
            txt={'Pintura de interiores/exteriores y empapelado'}
            ></CardExample>
          </Col>
          <Col md={6}>
            <CardExample
            img={ImgAlbanileria}
            txt={'Albañilería: reconstrucciones y extensiones'}
            ></CardExample>
          </Col>
          <Col md={6}>
            <CardExample
            img={ImgPlomeria}
            txt={'Reparación y cambios de sistemas de plomería'}
            ></CardExample>
          </Col>
          <Col md={6}>
            <CardExample
            img={ImgHogar}
            txt={'Jardinería, reparaciones del hogar, entre otros'}
            ></CardExample>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
