import React from 'react';
import '../assets/css/CardExample.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function CardExample(props) {
    const { img, txt, txt2 } = props;
  return (
    <div className='cardexample'>
        <Container>
            <Row>
                <Col xs={12} className='cardexample-box1'>
                    <img src={img} className='cardexample-img'></img>
                </Col>
                <Col xs={12} className='cardexample-box2'>
                    <h5 className='cardexample-txt'>{txt}</h5>
                    <h6 className='cardexample-txt2'>{txt2}</h6>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
