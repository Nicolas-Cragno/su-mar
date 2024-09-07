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
                <Col md={4} className='navbar-left'>
                    <Link to='/' className='link'>
                        <img src={ImgLogo} className='logo-principal'></img>
                        <h6 className='logo-principal-txt'> Su + Mar</h6>
                    </Link>
                </Col>
                <Col className='navbar-right'>
                    <ul className='navbar-ul'>
                        <Link to={'/informacion'} className='link'>
                        <li className='navbar-li'>
                            TRABAJOS
                        </li>
                        </Link>
                        <Link to={'/referencias'} className='link'>
                        <li className='navbar-li'>
                            REFERENCIAS
                        </li>
                        </Link>
                        <Link to={'/sobre-mi'} className='link'>
                        <li className='navbar-li'>
                            SOBRE MI
                        </li>
                        </Link>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
