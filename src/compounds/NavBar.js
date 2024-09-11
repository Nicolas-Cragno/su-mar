import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/NavBar.css';
import ImgLogo from '../assets/images/logoPrincipal.png';

export default function NavBar() {
  return (
    <div>
        <Container>
            <Row className='navbar'>
                <Col md={2} className='navbar-left'>
                    <Link to='/' className='link'>
                        <img src={ImgLogo} className='logo-principal'></img>
                        <h6 className='logo-principal-txt'> Su + Mar</h6>
                    </Link>
                </Col>
                <Col md={10} className='navbar-right'>
                    <ul className='navbar-ul'>
                        <Link to={'/informacion'} className='link'>
                        <li className='navbar-li'>
                            TRABAJOS
                        </li>
                        </Link>
                        <Link to={'/sobre-mi'} className='link'>
                        <li className='navbar-li'>
                            CONOCEME
                        </li>
                        </Link>
                        <Link to={'/contacto'} className='link'>
                        <li className='navbar-li'>
                            CONTACTO
                        </li>
                        </Link>
                    </ul>
                </Col>
                <Col xs={12} className='navbar-center'>
                    <ul className='navbar-ul'>
                        <Link to='/' className='link'>
                        <li className='navbar-li'>
                            <img src={ImgLogo} className='logo-principal'></img>
                            <h6 className='logo-principal-txt'> Su + Mar</h6>
                        </li>
                        </Link>
                        <Link to={'/informacion'} className='link'>
                        <li className='navbar-li'>
                            TRABAJOS
                        </li>
                        </Link>
                        <Link to={'/sobre-mi'} className='link'>
                        <li className='navbar-li'>
                            CONOCEME
                        </li>
                        </Link>
                        <Link to={'/contacto'} className='link'>
                        <li className='navbar-li'>
                            CONTACTO
                        </li>
                        </Link>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
