import React from 'react';
import '../assets/css/CardWall.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function CardWall(props) {
    const {img, title, txt } = props;
  return (
    <div className='card-wall'>
        <Container>
            <Row>
                <Col md={4} className='card-wall-col'>
                    <img src={img} alt='' className='card-wall-img'></img>
                </Col>
                <Col md={8} className='card-wall-col'>
                    <p className='card-wall-txt'>{txt}</p>
                    <h5 className='card-wall-title'>{title}</h5>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
