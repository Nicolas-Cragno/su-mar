import React from 'react';
import '../assets/css/CardInfo.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function CardInfo(props) {
    const { img, txt, txt2 } = props;
  return (
    <div className='cardinfo'>
        <Container>
            <Row>
                <Col xs={12} className='cardinfo-box1'>
                    <img src={img} className='cardinfo-img'></img>
                </Col>
                <Col xs={12} className='cardinfo-box2'>
                    <h5 className='cardinfo-txt'>{txt}</h5>
                    <h6 className='cardinfo-txt2'>{txt2}</h6>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
