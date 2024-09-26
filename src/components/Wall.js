import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/Wall.css';
import CardWall from '../compounds/CardWall';
import GarantiaLogo from '../assets/images/ConfianzaLogo.png';
import ProfesionalLogo from '../assets/images/ProfesionalLogo.png';
import ExperienciaLogo from '../assets/images/ExperienciaLogo.png';
import HoraLogo from '../assets/images/HoraLogo.png';


export default function Wall() {
  return (
    <div className='wall'>
        <Container className='wall'>
            <Row >
                <Col>
                    <CardWall
                    img={GarantiaLogo}
                    title='Garantizado'
                    txt='Resultado'
                    >
                    </CardWall>
                </Col>
                <Col>
                    <CardWall
                    img={ProfesionalLogo}
                    title='Profesionales'
                    txt='Los mejores'
                    >
                    </CardWall>
                </Col>
                <Col>
                    <CardWall
                    img={ExperienciaLogo}
                    title='Experiencia'
                    txt='+3 años de'
                    >
                    </CardWall>
                </Col>
                <Col>
                    <CardWall
                    img={HoraLogo}
                    title='Horarios'
                    txt='Respetamos tus'
                    >
                    </CardWall>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
