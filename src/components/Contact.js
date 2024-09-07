import React from 'react';
import '../assets/css/Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Img from '../assets/images/logoPrincipal.png';
import Wpp from '../assets/images/LogoWppWhite.png';
import Mail from '../assets/images/LogoMsgWhite.png';

export default function Contact() {
  return (
    <div className='contact'>
      <Container>
        <Row>
            <Col md={6} className='contact-box'>
                <img src={Img} className='img-logo'></img>
            </Col>
            <Col md={6} className='contact-box' >
                <Row className='contact-info'>
                    <Col xs={12}>
                        <h1 className='contact-txt1'>Contacto</h1><hr/>
                    </Col>
                    <Col xs={12}>
                        <p className='contact-txt2'>
                            <img src={Wpp} className='contact-logo'></img>
                            011-1561708621
                        </p>
                    </Col>
                    <Col xs={12}>
                        <p className='contact-txt2'>
                            <img src={Mail} className='contact-logo'></img>
                            tatetatin@hotmail.com
                        </p><hr/>
                    </Col>
                    <Col xs={12}>
                            <h5 className='contact-txt1'>Espero saber de ti pronto.</h5>
                    </Col>
                </Row>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
