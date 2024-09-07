import React from 'react';
import '../assets/css/WebsInfo.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImgInsta from '../assets/images/LogoInstagram.png';
import ImgWpp from '../assets/images/LogoWpp.png';

export default function WebsInfo() {
  return (
    <div className='websinfo'>
              <Link to='/'>
                <img src={ImgInsta} className='logo-img'></img>
              </Link>
              <Link to='/'>
                <img src={ImgWpp} className='logo-img'></img>
              </Link>
    </div>
  )
}
