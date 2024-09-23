import React from 'react';
import CardInfo from '../compounds/CardInfo';
import '../assets/css/Menu.css';
import { Container, Row, Col } from 'react-bootstrap';  
import ImgCableado from '../assets/images/cableado.png';
import ImgPintura from '../assets/images/pintura.png';
import ImgAlbanileria from '../assets/images/albanileria.png';
import ImgPlomeria from '../assets/images/plomeria.png';
import ImgHogar from '../assets/images/hogar.png';

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
                        <Col xs={12} className='menu-bar-item item-title'>
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
                <Col md={8} className='menu-item'>
                    <Col md={8} id='item1' >
                        <CardInfo
                        img={ImgCableado}
                        txt={'Cableado de casa e instalaciones eléctricas'}
                        txt2={'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).'}
                        ></CardInfo>
                    </Col>
                    <Col md={8} id='item2'>
                        <CardInfo
                        img={ImgPintura}
                        txt={'Pintura de interiores/exteriores y empapelado'}
                        txt2={'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).'}
                        ></CardInfo>
                    </Col>
                    <Col md={8} id='item3' >
                        <CardInfo
                        img={ImgAlbanileria}
                        txt={'Albañilería: reconstrucciones y extensiones'}
                        txt2={'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).'}
                        ></CardInfo>
                    </Col>
                    <Col md={8} id='item4'>
                        <CardInfo
                        img={ImgPlomeria}
                        txt={'Reparación y cambios de sistemas de plomería'}
                        txt2={'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).'}
                        ></CardInfo>
                    </Col>
                    <Col md={8} id='item5' >
                        <CardInfo
                        img={ImgHogar}
                        txt={'Jardinería, reparaciones del hogar, entre otros'}
                        txt2={'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).'}
                        ></CardInfo>
                    </Col>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
