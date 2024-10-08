import React from 'react';
import '../assets/css/Jobs.css';
import { Carousel } from 'react-bootstrap';
import CardExample from '../compounds/CardExample';
import Img1 from '../assets/images/trabajoBaño.png';
import Img2 from '../assets/images/trabajoCocina.png';
import Img3 from '../assets/images/trabajoComedor.png';
/*
import Img4 from '../assets/images/NoImage.png';
*/

export default function Jobs() {
  return (
    <div className='jobs'>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <CardExample
            img={Img1}
            txt={'Reconstrucción de baños'}
            txt2={'Trabajo realizado el 06.05.2024'}
          ></CardExample>
        </Carousel.Item>
        <Carousel.Item>
          <CardExample
            img={Img2}
            txt={'Renovación de cocinas'}
            txt2={'Trabajo realizado el 06.05.2024'}
          ></CardExample>
        </Carousel.Item>
        <Carousel.Item>
          <CardExample
            img={Img3}
            txt={'Remodelación de sala de estar'}
            txt2={'Trabajo realizado el 06.05.2024'}
          ></CardExample>
        </Carousel.Item>
      </Carousel>
      {/* Es el formato original que el cliente (mariana) hizo para esta parte, se opto por carousel finalmente ↑↑
      <Container >
          <Row>
              <Col md={6}>
              <CardExample
              img={Img1}
              txt={'Reconstrucción de baños'}
              txt2={'06.05.2024'}
              ></CardExample></Col>
              <Col md={6}>
              <CardExample
              img={Img2}
              txt={'Renovación de cocinas'}
              txt2={'06.05.2024'}
              ></CardExample>
              </Col>
              <Col md={6}>
              <CardExample
              img={Img3}
              txt={'Remodelación de sala de estar'}
              txt2={'06.05.2024'}
              ></CardExample></Col>
              <Col md={6}>
              <CardExample
              img={Img4}
              txt={'Descripción del trabajo/ejemplo'}
              txt2={'06.05.2024'}
              ></CardExample>
              </Col>
          </Row>
      </Container>
      */}
    </div>
  )
}
