import React from 'react';
import '../assets/css/Sing.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logoPrincipal.png';
import Check from '../assets/images/Check.png';

export default function Sing() {
  return (
    <div className='sing'>
        <Container>
            <Row>
                <Col xs={12} className='sing-col'>
                    <img src={Logo} className='sing-logo' alt=''></img>
                </Col>
                <Col xs={12} className='sing-col'>
                    <img src={Check} alt='' className='sing-txt-logo'></img>
                    <h2 className='sing-txt'>Asesoramiento</h2>
                </Col>
                <Col xs={12} className='sing-col'>
                    <img src={Check} alt='' className='sing-txt-logo'></img>
                    <h2 className='sing-txt'>Reparación</h2>
                </Col>
                <Col xs={12} className='sing-col'>
                    <img src={Check} alt='' className='sing-txt-logo'></img>
                    <h2 className='sing-txt'>Instalación</h2>
                </Col>
                <Col xs={12} className='sing-col'>
                    <Link to='/contacto'>
                        <button className='sing-btn'>
                            <h4>Quiero contactarme</h4>
                        </button>
                    </Link>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
