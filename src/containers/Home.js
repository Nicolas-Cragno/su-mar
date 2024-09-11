import React from 'react';
import '../assets/css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import Feed from '../components/Feed';
import Wall from '../components/Wall';
import Jobs from '../components/Jobs';

export default function Home() {
  return (
    <div className='home-page'>
        {/* se usa la img del background 
      <Container className='home-page'>
      </Container>
        */}
      <Feed></Feed>
      <Wall></Wall>
      <Jobs></Jobs>
    </div>
  )
}
