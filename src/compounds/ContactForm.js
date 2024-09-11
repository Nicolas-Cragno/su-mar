import React from 'react';
import '../assets/css/ContactForm.css';
import { Container, Row, Col, InputGroup, Form, Button, FloatingLabel } from 'react-bootstrap';


export default function ContactForm() {
  return (
    <div className='contactform'>
        <Container>
            <Row >
                <Col xs={12} className='contactform-box-input'>
                    <InputGroup className="mb-3">
                        <Form.Control placeholder="Nombre completo"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control placeholder="¿Dónde se realizaría el trabajo?"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control placeholder="Dirección de correo" />
                    </InputGroup>
                </Col>
                <Col xs={12} className='contactform-check'>
                {/*
                    <label className='contactform-txt'>Quiero consultar sobre...</label>
                */}
                    <div className='checkbox'>
                        <Form>
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="trabajo-electricidad"
                                label="Electricidad"
                                className='check-item'
                            />
                        </Form>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="trabajo-pintura"
                                label="Pintura"
                                className='check-item'
                            ></Form.Check>
                        </Form>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="trabajo-albanileria"
                                label="Albañilería"
                                className='check-item'
                            ></Form.Check>
                        </Form>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="trabajo-plomeria"
                                label="Plomería"
                                className='check-item'
                            ></Form.Check>
                        </Form>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="trabajo-hogar"
                                label="Hogar"
                                className='check-item'
                            ></Form.Check>
                        </Form>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="trabajo-otros"
                                label="Otros"
                                className='check-item'
                            ></Form.Check>
                        </Form>
                    </div>
                </Col>
                <Col xs={12}>
                    <FloatingLabel controlId="floatingTextarea2" label="¿En qué puedo ayudarte?">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '20vh' }}
                        />
                    </FloatingLabel>
                </Col>
                <Col xs={12} className='contact-btn'>
                    <Button variant="outline-primary">Enviar</Button>{' '}
                </Col>
            </Row>
        </Container>
    </div>
  )
}
