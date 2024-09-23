import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import '../assets/css/Menu.css';
import { Container, Row, Col } from 'react-bootstrap';  
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';

export default function Menu() {
    const mostrar = (valor) => {
        let element1 = document.getElementById("item1");
        let element2 = document.getElementById("item2");
        let element3 = document.getElementById("item3");
        let element4 = document.getElementById("item4");
        let element5 = document.getElementById("item5");

        switch(valor){
            case 1: 
                element1.style.display = "block";
                element2.style.display = "none";
                element3.style.display = "none";
                element4.style.display = "none";
                element5.style.display = "none";
            break;
            case 2: 
                element1.style.display = "none";
                element2.style.display = "block";
                element3.style.display = "none";
                element4.style.display = "none";
                element5.style.display = "none";
            break;
            case 3: 
                element1.style.display = "none";
                element2.style.display = "none";
                element3.style.display = "block";
                element4.style.display = "none";
                element5.style.display = "none";
            break;
            case 4: 
                element1.style.display = "none";
                element2.style.display = "none";
                element3.style.display = "none";
                element4.style.display = "block";
                element5.style.display = "none";
            break;
            case 5: 
                element1.style.display = "none";
                element2.style.display = "none";
                element3.style.display = "none";
                element4.style.display = "none";
                element5.style.display = "block";
            break;
            default:
                element1.style.display = "none";
                element2.style.display = "none";
                element3.style.display = "none";
                element4.style.display = "none";
                element5.style.display = "none";
        }
    }

  return (
    <div className='menu'>  
        <Container>
            <Row>
                <Col md={4} className="menu-bar">
                    <Row>
                        <Col xs={12} className='menu-bar-item'>
                            <h2>¿ Que ofrecemos ?</h2>
                        </Col>
                        <Col xs={12} className='menu-bar-item'>
                            <button onClick={() => {mostrar(1)}} className='itemList'>
                                <h3>Electricidad</h3>
                            </button>
                        </Col>
                        <Col xs={12} className='menu-bar-item'>
                            <button onClick={() => {mostrar(2)}} className='itemList'>
                                <h3>Pintura</h3>
                            </button>
                        </Col>
                        <Col xs={12} className='menu-bar-item'>
                            <button onClick={() => {mostrar(3)}} className='itemList'>
                                <h3>Albañilería</h3>
                            </button>                            
                        </Col>
                        <Col xs={12} className='menu-bar-item'>
                            <button onClick={() => {mostrar(4)}} className='itemList'>
                                <h3>Plomería</h3>
                            </button>
                        </Col>
                        <Col xs={12} className='menu-bar-item'>
                            <button onClick={() => {mostrar(5)}} className='itemList'>
                                <h3>Hogar</h3>
                            </button>
                        </Col>
                    </Row>
                </Col>
                <Col md={8} id='item1' >
                    <p>esta es la Electricidad</p>
                </Col>
                <Col md={8} id='item2'>
                    <p>esta es la pintura</p>
                </Col>
                <Col md={8} id='item3' >
                    <p>esta es la Albañileria</p>
                </Col>
                <Col md={8} id='item4'>
                    <p>esta es la Plomeria</p>
                </Col>
                <Col md={8} id='item5' >
                    <p>esta es la Hogar</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
