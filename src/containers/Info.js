import React from 'react';
import '../assets/css/Info.css';
import Menu from '../components/Menu';
import { Container, Row, Col } from 'react-bootstrap';
import CardExample from '../compounds/CardExample';
import ImgCableado from '../assets/images/cableado.png';
import ImgPintura from '../assets/images/pintura.png';
import ImgAlbanileria from '../assets/images/albanileria.png';
import ImgPlomeria from '../assets/images/plomeria.png';
import ImgHogar from '../assets/images/hogar.png';


export default function Info() {
  return (
    <div className='info-page'>
      <Menu></Menu>
    </div>
  )
}
