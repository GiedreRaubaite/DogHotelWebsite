import React from 'react';
import { Jumbotron as Jumbo, Container, Col, Row, Card } from 'react-bootstrap';
import calendarPhoto from '../assets/calendarPhoto.jpg';
import sayWoofPhoto from '../assets/saywoof.png';
import styled from 'styled-components';


const Styles = styled.div`
  .jumbo {
    font-family: 'Baloo 2', cursive;
    color: #000;
    text-align:center;
    position: relative;
    z-index: -2;
    background-color: #fff;
  }
  img {
    border-radius: 5px;
  }
  text {
    width: 100%;
    font-family: 'Baloo 2', cursive;
    justify-content:center;
  }
  h1 {
    text-align:center;
  }
  .card-body {
      font-size: 1.1em;
      line-height: 2em;
  }
  .calendar{
      border: solid black 1px;
      border-radius: 20px;
  }
  .card {
      border-radius:20px;
      min-height: 550px;
  }
`;

export const Home = () => (
    < Styles >
        <Container>
            <Row>
                <Col sm={6}>
                    <Jumbo fluid className="jumbo">
                        <Container>
                            <Card>
                                <Card.Body>
                                    <Card.Text className="my-5"><h2>Rezervuok čia!</h2></Card.Text>

                                    <Card.Img src={calendarPhoto} className="img-fluid calendar"></Card.Img>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Jumbo>
                </Col>
                <Col sm={6}>
                    <Jumbo fluid className="jumbo">
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Text>
                                    Palikite savo mylimą keturkojį Woof Woof šunų viešbutyje!
                                    Mes jam ne tik suteiksime šiltą ir minkštą vietą po stogu,
                                    bet ir pasirūpinsime taip kaip savu.
                                    Pagal šuns poreikius, eisime pasivaikščioti, žaisime, grožėsimės saulėlydžiais, o jei šeiminkai pageidaus,
                                    suruošime SPA (maudynes) ir plaukų priežiūros procedūras.
                                    Be galo mylime visus šunis ir su nekantrumu laukiame atvykstant.
                                        </Card.Text>
                                <Card.Img src={sayWoofPhoto} style={{ width: 250 }}></Card.Img>
                            </Card.Body>
                        </Card>                    </Jumbo></Col>
            </Row>
        </Container>
    </Styles >
)