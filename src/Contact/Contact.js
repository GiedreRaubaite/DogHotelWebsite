import React from 'react'
import { Jumbotron as Jumbo, Card, Row, Container, Col } from 'react-bootstrap'
import FormComponent from './formComponent'
import styled from 'styled-components';
import { MyMap } from './mapComponent'
import { FaPhone, FaMapMarker, FaEnvelope, FaDog } from 'react-icons/fa'


const Styles = styled.div`
  .jumbo {
    font-family: 'Baloo 2', cursive;
    color: #000;
    position: relative;
    z-index: -2;
    background-color: #fff;

  }
  .card {
      min-height: 550px;
      border-radius: 20px;
  }
  .jumbo {
      z-index:0;
  }`

export const Contact = () => (
    < Styles >
        <Container>
            <Row>
                <Col sm={6}>
                    <Jumbo fluid className="jumbo">
                        <Container>
                            <Card>
                                <Card.Body>
                                    <Card.Text><h2>Susisiekime</h2>
                                    </Card.Text>
                                    <FormComponent />
                                </Card.Body>
                            </Card>
                        </Container>
                    </Jumbo>
                </Col>
                <Col sm={6}>
                    <Jumbo fluid className="jumbo">
                        <Card>
                            <Card.Text className="pt-5">
                                <Row className="d-flex mx-3">
                                    <Col className="mx-3 text-left"> <div> <p> <FaDog /> UAB "Woof Woof" </p></div>
                                        <div> <p> <FaMapMarker /> Gedimino g. 9, Vilnius </p> </div>
                                    </Col>
                                    <Col className="mx-3 text-left"><div> <p> <FaPhone /> +32494396608</p></div>
                                        <div className="ml-auto"> <p> <FaEnvelope /> woofwoof@gmail.com </p></div>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Body>
                                <MyMap />
                            </Card.Body>
                        </Card>
                    </Jumbo>
                </Col>
            </Row>
        </Container>
    </Styles >
)