import React from 'react';
import '../assets/css/Feed.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sing from '../compounds/Sing';

export default function Feed() {
  return (
    <div className='feed'>
      <Container>
          {/* img del background */}
          <Row>
            <Col md={6} className='feed-content'>
              <Sing></Sing>
            </Col>
          </Row>
      </Container>
    </div>
  )
}
